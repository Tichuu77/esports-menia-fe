import { i18n } from 'src/i18n';
import { Excel } from 'src/modules/shared/excel/excel';
import ImporterSchema from 'src/modules/shared/importer/importerSchema';
import * as XLSX from 'xlsx';

export default class Importer {
  schema: ImporterSchema;

  constructor(fields) {
    this.schema = new ImporterSchema(fields);
  }

  downloadTemplate(templateFileName) {
    return Excel.exportAsExcelFile(
      [],
      this.schema.labels,
      templateFileName,
    );
  }

  async castForDisplay(row, index) {
    return this.schema.castForDisplay(row, index);
  }

  async castForImport(row) {
    return this.schema.castForImport(row);
  }

  async convertExcelFileToJson(file, skipHeader = true) {
    const workbook =
      await this._convertExcelFileToWorkbook(file);

    const json = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]],
      {
        header: 1,
        blankrows: false,
        range: skipHeader ? 1 : undefined,
      },
    );

    return json;
  }

  async _convertExcelFileToWorkbook(file) {
    try {
      const data = await this._readFile(file);
      return XLSX.read(data, {
        type: 'array',
        cellDates: true,
      });
    } catch (error) {
      throw new Error(
        i18n('importer.errors.invalidFileUpload'),
      );
    }
  }

  async _readFile(file) {
    if (!file) {
      return null;
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          if (!e || !e.target) {
            reject(new Error());
            return;
          }

          const data = new Uint8Array(
            e.target.result as any,
          );
          resolve(data);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (e) => {
        reject();
      };

      reader.readAsArrayBuffer(file);
    });
  }
}
