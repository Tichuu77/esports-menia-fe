import moment from 'moment';
import { i18n } from 'src/i18n';

const filterRenders = {
  enumerator: (i18nStartPath:any) => (value:any) =>
    value ? i18n(`${i18nStartPath}.${value}`) : null,
  enumeratorMultiple: (i18nStartPath:any) => (values:any) =>
    values
      ? values
          .map((value:any) => i18n(`${i18nStartPath}.${value}`))
          .join(', ')
      : null,
  generic: () => (value:any) => value,
  stringArray: () => (value:any) => (value || []).join(', '),
  json: () => (value:any) =>
    value ? JSON.stringify(value, null, 2) : null,
  decimal: (fractionDigits?:any) => (value:any) =>
    formatDecimal(value, fractionDigits),
  boolean: (trueLabel?:any, falseLabel?:any) => (value:any) =>
    value == null
      ? null
      : Boolean(value)
        ? trueLabel || i18n('common.yes')
        : falseLabel || i18n('common.no'),
  relationToOne: () => (value:any) =>
    (value && value.label) || null,
  relationToMany: () => (value:any) =>
    (value || []).map((item:any) => item.label).join(', '),
  filesOrImages: () => (value:any) =>
    (value || []).map((item:any) => item.downloadUrl).join(' '),
  date: () => (value:any) => formatDate(value),
  dateRange: () => (value:any) => {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (!start && !end) {
      return null;
    }

    if (start && !end) {
      return `> ${formatDate(start)}`;
    }

    if (!start && end) {
      return `< ${formatDate(end)}`;
    }

    return `${formatDate(start)} - ${formatDate(end)}`;
  },
  datetime: () => (value:any) => formatDatetime(value),
  datetimeRange: () => (value:any) => {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (!start && !end) {
      return null;
    }

    if (start && !end) {
      return `> ${formatDatetime(start)}`;
    }

    if (!start && end) {
      return `< ${formatDatetime(end)}`;
    }

    return `${formatDatetime(start)} - ${formatDatetime(
      end,
    )}`;
  },
  decimalRange: (fractionDigits?:any) => (value:any) => {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (start == null && end == null) {
      return null;
    }

    if (start != null && end == null) {
      return `> ${formatDecimal(start, fractionDigits)}`;
    }

    if (start == null && end != null) {
      return `< ${formatDecimal(end, fractionDigits)}`;
    }

    return `${formatDecimal(
      start,
      fractionDigits,
    )} - ${formatDecimal(end, fractionDigits)}`;
  },
  range: () => (value:any) => {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (
      (start == null || start === '') &&
      (end == null || end === '')
    ) {
      return null;
    }

    if (start != null && (end == null || end === '')) {
      return `> ${start}`;
    }

    if ((start == null || start === '') && end != null) {
      return `< ${end}`;
    }

    return `${start} - ${end}`;
  },
};

function formatDecimal(value:any, fractionDigits:any) {
  return value
    ? fractionDigits
      ? Number(value).toFixed(fractionDigits)
      : Number(value)
    : null;
}

function formatDate(value:any) {
  return value ? moment(value).format('YYYY-MM-DD') : null;
}

function formatDatetime(value:any) {
  return value
    ? moment(value).format('YYYY-MM-DD HH:mm')
    : null;
}

export default filterRenders;
