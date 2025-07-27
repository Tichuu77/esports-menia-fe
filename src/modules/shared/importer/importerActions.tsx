import chunk from 'lodash/chunk';
import md5 from 'md5';
import { i18n } from 'src/i18n';
import Errors from 'src/modules/shared/error/errors';
import Importer from 'src/modules/shared/importer/importer';

async function importRow(
  dispatch : any,
  actions:any,
  importer:any,
  importFn:any,
  row:any,
) {
  try {
    const importableRow = await importer.castForImport(row);
    const importHash = md5(JSON.stringify(importableRow));
    await importFn(importableRow, importHash);

    dispatch({
      type: actions.IMPORT_BATCH_SUCCESS,
      payload: {
        line: row._line,
      },
    });
  } catch (error) {
    dispatch({
      type: actions.IMPORT_BATCH_ERROR,
      payload: {
        line: row._line,
        errorMessage: Errors.selectMessage(error),
      },
    });
  }
}

export default (
  prefix:any,
  selectors:any,
  importFn:any,
  importFields:any,
  templateFileName :any,
  batchSize = 10,
) => {
  const actions = {
    RESETED: `${prefix}_RESETED`,

    FILE_READ_ERROR: `${prefix}_FILE_READ_ERROR`,
    FILE_READ_SUCCESS: `${prefix}_FILE_READ_SUCCESS`,

    PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
    SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

    IMPORT_STARTED: `${prefix}_IMPORT_STARTED`,
    IMPORT_ERROR: `${prefix}_IMPORT_ERROR`,
    IMPORT_PAUSED: `${prefix}_IMPORT_PAUSED`,
    IMPORT_SUCCESS: `${prefix}_IMPORT_SUCCESS`,

    IMPORT_BATCH_ERROR: `${prefix}_IMPORT_BATCH_ERROR`,
    IMPORT_BATCH_SUCCESS: `${prefix}_IMPORT_BATCH_SUCCESS`,

    doChangePagination: (pagination:any) => ({
      type: actions.PAGINATION_CHANGED,
      payload: pagination,
    }),

    doChangeSort:
      (rows:any, sorter:any) => async (dispatch:any) => {
        const { field, order } = sorter;

        let sortFn = (a:any, b:any) =>
          (String(a[field]) || '').localeCompare(
            String(b[field]) || '',
          );

        if (field === '_line') {
          sortFn = (a, b) => a._line - b._line;
        }

        if (field === '_status') {
          sortFn = (a, b) =>
            (a._status || '').localeCompare(
              b._status || '',
            );
        }

        let sortedRows = [...rows].sort(sortFn);

        if (order === 'descend') {
          sortedRows = sortedRows.reverse();
        }

        dispatch({
          type: actions.SORTER_CHANGED,
          payload: {
            sortedRows,
            sorter,
          },
        });
      },

    doReset: () => {
      return {
        type: actions.RESETED,
      };
    },

    doPause: () => {
      return {
        type: actions.IMPORT_PAUSED,
      };
    },

    doImport: () => async (dispatch:any, getState:any) => {
      try {
        dispatch({
          type: actions.IMPORT_STARTED,
        });

        const pendingRows =
          selectors.selectPendingRows(getState());

        const importer = new Importer(importFields);

        const pendingBatches = chunk(
          pendingRows,
          batchSize,
        );

        for (let batch of pendingBatches) {
          const paused =
            !selectors.selectImporting(getState());

          if (paused) {
            return;
          }

          await Promise.all(
            batch.map((row) =>
              importRow(
                dispatch,
                actions,
                importer,
                importFn,
                row,
              ),
            ),
          );
        }

        dispatch({
          type: actions.IMPORT_SUCCESS,
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: actions.IMPORT_ERROR,
        });
      }
    },

    doDownloadTemplate: () => async ( ) => {
      const importer = new Importer(importFields);
      importer.downloadTemplate(templateFileName);
    },

    doReadFile: (file:any) => async (dispatch:any) => {
      try {
        const importer = new Importer(importFields);

        let rawData =
          await importer.convertExcelFileToJson(file);

        if (!rawData || !rawData.length) {
          throw new Error(
            i18n('importer.errors.invalidFileEmpty'),
          );
        }

        rawData = await Promise.all(
          rawData.map(async (row, index) => {
            return await importer.castForDisplay(
              row,
              index,
            );
          }),
        );

        dispatch({
          type: actions.FILE_READ_SUCCESS,
          payload: rawData,
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.FILE_READ_ERROR,
          payload: error,
        });
      }
    },
  };

  return actions;
};
