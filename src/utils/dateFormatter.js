function formatDate(dateValue, lang = 'en') {
  if (!dateValue) return dateValue;

  const date = dateValue instanceof Date ? dateValue : new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';

  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeStyle: 'long'
  }).format(date);
}

function formatDatesInObject(value, lang = 'en', parentKey = '') {
  if (value instanceof Date) {
    return formatDate(value, lang);
  }

  if (Array.isArray(value)) {
    return value.map((item) => formatDatesInObject(item, lang, parentKey));
  }

  if (value && typeof value === 'object') {
    const result = {};

    for (const [key, val] of Object.entries(value)) {
      if (
        val instanceof Date ||
        (
          typeof val === 'string' &&
          (key.toLowerCase().includes('date') || key.toLowerCase().includes('at'))
        )
      ) {
        result[key] = formatDate(val, lang);
      } else {
        result[key] = formatDatesInObject(val, lang, key);
      }
    }

    return result;
  }

  return value;
}

module.exports = {
  formatDate,
  formatDatesInObject
};