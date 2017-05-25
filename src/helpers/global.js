export const isEmpey = (value = '') => {
  switch (typeof value) {
    case 'object': {
      if (value === null) return true;
      let count = 0;
      for (const i in value) {
        if (i) count += 1;
      }
      return count <= 0;
    }
    case 'number': {
      return false;
    }
    case 'function': {
      return true;
    }
    case 'boolean': {
      if (value) return false;
      return true;
    }
    default:
      return value.length <= 0;
  }
};

export const size = (value) => {
  try {
    return value.length;
  } catch (e) {
    return -1;
  }
};
export const pick = (keys, objects) => {
  const rules = {};
  for (const variable in keys) {
    const key = keys[variable];
    if (objects.hasOwnProperty(key)) {
      rules[key] = objects[key];
    }
  }
  return rules;
};

export const remove = (keys, objects) => {
  const rules = {};
  for (const variable in objects) {
    if (keys.indexOf(variable) < 0) {
      rules[variable] = objects[variable];
    }
  }
  return rules;
};

export const getOption = (value = '', options = []) => {
  for (const key in options) {
    if (options[key] && options[key].value && options[key].value === value) return options[key];
  }
  return '';
};

export const toNumber = (value = '') => {
  if (value.indexOf && value.indexOf(',') > 0) {
    return value.replace(/,/g, '');
  }
  return value;
};

export const checkNumberFormat = (value = '', format = '') => {
  const re = /^-?\d+(\.)?(\d+)?$/;
  const splitFormat = format.split('.');
  const splitValue = value.split('.');
  const decimalFormat = splitFormat[1] ? splitFormat[1] : '';
  const decimalValue = splitValue[1] ? splitValue[1] : '';
  if (format === '') return false;
  return re.test(value) && decimalFormat.length >= decimalValue.length;
};

export function toNumeral(value, format = '') {
  const valueToNumber = toNumber(value);
  if (value === '') return value;
  if (!isFinite(valueToNumber)) return value;
  if (!isEmpey(format)) {
    const splitFormat = format.split('.');
    const integerFormat = splitFormat[0] ? splitFormat[0] : '0';
    const decimalFormat = splitFormat[1] ? splitFormat[1] : '';

    // not NaN
    if (isNaN(Number(valueToNumber))) {
      return Number(valueToNumber);
    } else {
      try {
        const splitValue = valueToNumber.split('.');
        const comma = decimalFormat.length > 0 && value.indexOf('.') >= 0 ? '.' : '';
        const decimal = decimalFormat.length > 0 && splitValue[1] ? splitValue[1].substring(0, decimalFormat.length) : '';
        let number = splitValue[0] ? splitValue[0].toString() : '';
        number = number.length < 10 && number.length > 0 ? Number(number).toString() : number;
        if (integerFormat.indexOf(',') >= 0) {
          const splitIntegerFormat = integerFormat.split(',');
          const getcomma = splitIntegerFormat[splitIntegerFormat.length - 1] ? splitIntegerFormat[splitIntegerFormat.length - 1].length : 3;
          const pattern = new RegExp(`(-?\\d+)(\\d{${getcomma}})`);// /(-?\d+)(\d{3})/;

          while (pattern.test(number)) number = number.replace(pattern, '$1,$2');
          return `${number}${comma}${decimal}`;
        } else {
          return `${number}${comma}${decimal}`;
        }
      } catch (e) {
        return valueToNumber;
      }
    }
  } else {
    return value;
  }
}

export const isRequired = (value = '') => value.length <= 0;

export function isNumber(value) {
  const checkValue = toNumber(value);
  return !isNaN(Number(checkValue));
}

export const isEmail = (value) => {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(value);
};

export const verifyField = (value = '', rules = {}) => {
  if (value !== '' || rules.required) {
    for (const key in rules) {
      const typeofRules = typeof rules[key];
      if (typeofRules === 'number' || typeofRules === 'string') {
        switch (key) {
          case 'required': {
            if (isEmpey(value)) return rules[key];
            break;
          }
          case 'number': {
            if (!isNumber(value)) return rules[key];
            break;
          }
          case 'email': {
            if (!isEmail(value)) return rules[key];
            break;
          }
          default:
            return '';
        }
      }
    }
    return '';
  }
  return '';
};
