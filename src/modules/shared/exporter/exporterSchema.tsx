export default class ExporterSchema {
  fields: Array<any>;

  constructor(fields:any) {
    this.fields = fields;
  }

  get labels() {
    return this.fields.map((field) => field.label);
  }

  labelOf(name:any) {
    const field = this.fields.find(
      (field) => field.name === name,
    );

    if (field) {
      return field.label;
    }

    return name;
  }

  cast(row:any) {
    if (!row) {
      return row;
    }

    let casted :any;
    Object.keys(row).forEach((name) => {
      const field = this.fields.find(
        (field) => field.name === name,
      );
      if (field) {
        casted[name]  = field.render
          ? field.render(row[name])
          : row[name]
            ? String(row[name])
            : '';
      }
    });
    return casted;
  }
}
