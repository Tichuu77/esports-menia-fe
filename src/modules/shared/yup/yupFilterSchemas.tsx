import moment from 'moment';
import { i18n } from 'src/i18n';
import * as yup from 'yup';

const yupFilterSchemas = {
  generic(label:any) {
    return yup.mixed().label(label);
  },
  string(label:any) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .trim()
      .label(label);
  },
  stringArray(label:any) {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .of(
        yup
          .string()
          .transform((cv, ov) => {
            return ov === '' ? null : cv;
          })
          .trim(),
      )
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return originalValue;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return [originalValue];
      });

    return yupChain;
  },
  boolean(label:any) {
    return yup.bool().nullable().label(label);
  },
  relationToOne(label:any) {
    return yup
      .mixed()
      .nullable(true)
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return originalValue.id;
      });
  },
  relationToMany(label:any) {
    return yup
      .mixed()
      .nullable(true)
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return [];
        }

        return originalValue.map((item:any) => item.id);
      });
  },
  json(label:any) {
    return yup.mixed().nullable().label(label);
  },
  integer(label:any) {
    return yup
      .number()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .integer(true)
      .nullable()
      .label(label);
  },
  integerRange(label:any) {
    return yup.mixed().label(label);
  },
  enumerator(label:any) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .label(label)
      .nullable(true);
  },
  email(label:any) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .trim()
      .label(label);
  },
  decimal(label:any) {
    let yupChain = yup
      .number()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .label(label);

    return yupChain;
  },
  decimalRange(label:any) {
    return yup
      .array()
      .ensure()
      .compact()
      .of(
        yup
          .number()
          .transform((cv, ov) => {
            return ov === '' ? null : cv;
          })
          .nullable(true)
          .label(label),
      )
      .label(label);
  },
  datetime(label:any) {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(label)
      .transform((value, originalValue) =>
        originalValue
          ? moment(
              originalValue,
              'YYYY-MM-DD HH:mm',
            ).toISOString()
          : null,
      );

    return yupChain;
  },
  datetimeRange(label:any) {
    return yup.mixed().label(label);
  },
  date(label:any) {
    return yup
      .mixed()
      .nullable(true)
      .label(label)
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value) => {
          if (!value) {
            return true;
          }

          return moment(value, 'YYYY-MM-DD').isValid();
        },
      );
  },
  dateRange(label:any) {
    return yup
      .array()
      .ensure()
      .compact()
      .of(
        yup
          .mixed()
          .nullable(true)
          .label(label)
          .test(
            'is-date',
            i18n('validation.mixed.default'),
            (value) => {
              if (!value) {
                return true;
              }

              return moment(value, 'YYYY-MM-DD').isValid();
            },
          )
          .transform((value) =>
            value
              ? moment(value).format('YYYY-MM-DD')
              : null,
          ),
      )
      .label(label);
  },
};

export default yupFilterSchemas;
