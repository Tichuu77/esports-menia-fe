import statuses from 'src/modules/shared/importer/importerStatuses';
import * as yup from 'yup';

export default class ImporterSchema {
  fields: Array<any>;
  yupSchema: any;

  constructor(fields:any) {
    this.fields = fields;
    this.yupSchema = this.buildSchema();
  }

  buildSchema() {
    let shape : any;

    this.fields.forEach((field) => {
      shape[field.name] = field.schema;
    });

    return yup.object().shape(shape).noUnknown(true);
  }

  async castForDisplay(row:any, index:any) {
    const rowWithColumnNames = {} as any;

    rowWithColumnNames._status = statuses.PENDING;
    rowWithColumnNames._line = index + 2 /* 0 and header */;

    this.fields.forEach((field, index) => {
      rowWithColumnNames[field.name] = row[index];
    });

    try {
      const validatableRow = await this.castForValidation(
        rowWithColumnNames,
      );
      await this.yupSchema.validate(validatableRow);
    } catch (error:any) {
      rowWithColumnNames._status = statuses.ERROR;
      rowWithColumnNames._errorMessage = error.message;
    }

    return rowWithColumnNames;
  }

  async castForImport(row:any) {
    return this.yupSchema.cast(row);
  }

  async castForValidation(row:any) {
    return this.yupSchema.cast(row);
  }

  get labels() {
    return this.fields.map((field) => field.label);
  }
}
