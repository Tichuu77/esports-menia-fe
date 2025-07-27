import moment from 'moment';
import { i18n } from 'src/i18n';
import * as yup from 'yup';

const yupImporterSchemas = {
  generic(label:any) {
    return yup.mixed().label(label);
  },
  string(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .trim()
      .label(label);

    if (config.required) {
      yupChain = yupChain.required();
    }

    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }

    if (config.max) {
      yupChain = yupChain.max(config.max);
    }

    if (config.matches) {
      yupChain = yupChain.matches(config.matches);
    }

    return yupChain;
  },
  boolean(label:any) {
    return yup.bool().default(false).label(label);
  },
  relationToOne(label:any, config?:any) {
    config = config || {};

    let yupChain = yup.mixed().nullable(true).label(label);

    if (config.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  },
  stringArray(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .mixed()
      .label(label)
      .transform((value) =>
        Array.isArray(value)
          ? value
          : (value || '')
              .trim()
              .split(' ')
              .filter((item:any) => Boolean(item))
              .map((item:any) => item.trim()),
      );

    if (config.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  },
  relationToMany(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .array()
      .nullable(true)
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return originalValue
          .trim()
          .split(' ')
          .map((value:any) => {
            return value;
          });
      });

    if (config.required || config.min) {
      yupChain = yupChain.required();
    }

    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    } else if (config.required) {
      yupChain = yupChain.min(1);
    }

    if (config.max) {
      yupChain = yupChain.max(config.max);
    }

    return yupChain;
  },
  json(label:any) {
    return yup.mixed().label(label);
  },
  integer(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .number()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .integer()
      .nullable(true)
      .label(label);

    if (config.required) {
      yupChain = yupChain.required();
    }

    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }

    if (config.max) {
      yupChain = yupChain.max(config.max);
    }

    return yupChain;
  },
  images(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .array()
      .nullable(true)
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return originalValue
          .trim()
          .split(' ')
          .map((value:any) => {
            return {
              name: value.trim(),
              publicUrl: value.trim(),
              new: true,
            };
          });
      });

    if (config.required || config.min) {
      yupChain = yupChain.required();
    }

    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    } else if (config.required) {
      yupChain = yupChain.min(1);
    }

    if (config.max) {
      yupChain = yupChain.max(config.max);
    }

    return yupChain;
  },
  files(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .array()
      .nullable(true)
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return originalValue
          .trim()
          .split(' ')
          .map((value:any) => {
            return {
              name: value.trim(),
              publicUrl: value.trim(),
              new: true,
            };
          });
      });

    if (config.required || config.min) {
      yupChain = yupChain.required();
    }

    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    } else if (config.required) {
      yupChain = yupChain.min(1);
    }

    if (config.max) {
      yupChain = yupChain.max(config.max);
    }

    return yupChain;
  },
  enumerator(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .label(label)
      .nullable(true)
      .oneOf([null, ...(config.options || [])]);

    if (config.required) {
      yupChain = yupChain.required(
        i18n('validation.string.selected'),
      );
    }

    return yupChain;
  },
  email(label:any, config?:any) {
    config = config || {};

    let yupChain = yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .trim()
      .label(label)
      .email();

    if (config.required) {
      yupChain = yupChain.required();
    }

    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }

    if (config.max) {
      yupChain = yupChain.max(config.max);
    }

    if (config.matches) {
      yupChain = yupChain.matches(config.matches);
    }

    return yupChain;
  },
  decimal(label:any, config?:any) {
    config = config || {};
    let yupChain = yup
      .number()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .label(label);

    if (config.required) {
      yupChain = yupChain.required();
    }

    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }

    if (config.max) {
      yupChain = yupChain.max(config.max);
    }

    return yupChain;
  },
  datetime(label:any, config?:any) {
    config = config || {};
    let yupChain = yup
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

          return value instanceof Date;
        },
      );

    if (config.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  },
  date(label:any, config?:any) {
    config = config || {};
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(label)
      .transform((value) => {
        if (!value) {
          return null;
        }

        if (!(value instanceof Date)) {
          return 'Invalid date';
        }

        return moment(value).format('YYYY-MM-DD');
      })
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value, context: any) => {
          if (context.originalValue === 'Invalid date') {
            return false;
          }

          return true;
        },
      );

    if (config.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  },
};

export default yupImporterSchemas;
