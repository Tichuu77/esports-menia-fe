import moment from 'moment';

const exporterRenders = {
  stringArray: () => (value) => (value || []).join(', '),
  json: () => (value) =>
    value ? JSON.stringify(value, null, 2) : null,
  integer: () => (value) => (value ? Number(value) : null),
  decimal: (fractionDigits?) => (value) =>
    value
      ? fractionDigits
        ? Number(value).toFixed(fractionDigits)
        : Number(value)
      : null,
  boolean: () => (value) => String(Boolean(value)),
  text: () => (value) => value || null,
  name: () => (value) => {
    if (!value) return null;
    if (typeof value === 'string') return value;       
    if (typeof value === 'object' && value.name) return value.name;  
    return null;
  },
  fieldByName: (fieldName) => (value) =>
    (value && value[fieldName]) || null,
  fieldByNameForArray: (fieldName) => (value) =>
    (value || []).map((item) => item[fieldName]).join(' '),
  relationToOneAsString: (relationName, fieldName) => (value) =>
    (value && value[relationName] && value[relationName][fieldName]) || null,
  relationToOne: () => (value) =>
    (value && value.id) || null,
  relationToMany: () => (value) =>
    (value || []).map((item) => item.id).join(' '),
  filesOrImages: () => (value) =>
    (value || []).map((item) => item.downloadUrl).join(' '),
  date: () => (value) =>
    value ? moment(value).format('YYYY-MM-DD') : null,
  datetime: () => (value) =>
    value ? moment(value).format('YYYY-MM-DD HH:mm') : null,
};

export default exporterRenders;
