import moment from 'moment';

const exporterRenders = {
  stringArray: () => (value:any) => (value || []).join(', '),
  json: () => (value:any) =>
    value ? JSON.stringify(value, null, 2) : null,
  integer: () => (value:any) => (value ? Number(value) : null),
  decimal: (fractionDigits?:any) => (value:any) =>
    value
      ? fractionDigits
        ? Number(value).toFixed(fractionDigits)
        : Number(value)
      : null,
  boolean: () => (value:any) => String(Boolean(value)),
  text: () => (value:any) => value || null,
  name: () => (value:any) => {
    if (!value) return null;
    if (typeof value === 'string') return value;       
    if (typeof value === 'object' && value.name) return value.name;  
    return null;
  },
  fieldByName: (fieldName:any) => (value:any) =>
    (value && value[fieldName]) || null,
  fieldByNameForArray: (fieldName:any) => (value:any) =>
    (value || []).map((item:any) => item[fieldName]).join(' '),
  relationToOneAsString: (relationName:any, fieldName:any) => (value:any) =>
    (value && value[relationName] && value[relationName][fieldName]) || null,
  relationToOne: () => (value:any) =>
    (value && value.id) || null,
  relationToMany: () => (value:any) =>
    (value || []).map((item:any) => item.id).join(' '),
  filesOrImages: () => (value:any) =>
    (value || []).map((item:any) => item.downloadUrl).join(' '),
  date: () => (value:any) =>
    value ? moment(value).format('YYYY-MM-DD') : null,
  datetime: () => (value:any) =>
    value ? moment(value).format('YYYY-MM-DD HH:mm') : null,
};

export default exporterRenders;
