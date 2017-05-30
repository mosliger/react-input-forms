'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toNumeral = toNumeral;
exports.isNumber = isNumber;
var isEmpey = exports.isEmpey = function isEmpey() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
    case 'object':
      {
        if (value === null) return true;
        var count = 0;
        for (var i in value) {
          if (i) count += 1;
        }
        return count <= 0;
      }
    case 'number':
      {
        return false;
      }
    case 'function':
      {
        return true;
      }
    case 'boolean':
      {
        if (value) return false;
        return true;
      }
    default:
      return value.length <= 0;
  }
};

var size = exports.size = function size(value) {
  try {
    return value.length;
  } catch (e) {
    return -1;
  }
};
var pick = exports.pick = function pick(keys, objects) {
  var rules = {};
  for (var variable in keys) {
    var key = keys[variable];
    if (objects.hasOwnProperty(key)) {
      rules[key] = objects[key];
    }
  }
  return rules;
};

var remove = exports.remove = function remove(keys, objects) {
  var rules = {};
  for (var variable in objects) {
    if (keys.indexOf(variable) < 0) {
      rules[variable] = objects[variable];
    }
  }
  return rules;
};

var getOption = exports.getOption = function getOption() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var key in options) {
    if (options[key] && options[key].value && options[key].value === value) return options[key];
  }
  return '';
};

var toNumber = exports.toNumber = function toNumber() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (value.indexOf && value.indexOf(',') > 0) {
    return value.replace(/,/g, '');
  }
  return value;
};

var checkNumberFormat = exports.checkNumberFormat = function checkNumberFormat() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var re = /^-?\d+(\.)?(\d+)?$/;
  var splitFormat = format.split('.');
  var splitValue = value.split('.');
  var decimalFormat = splitFormat[1] ? splitFormat[1] : '';
  var decimalValue = splitValue[1] ? splitValue[1] : '';
  if (format === '') return false;
  return re.test(value) && decimalFormat.length >= decimalValue.length;
};

function toNumeral(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var valueToNumber = toNumber(value);
  if (value === '') return value;
  if (!isFinite(valueToNumber)) return value;
  if (!isEmpey(format)) {
    var splitFormat = format.split('.');
    var integerFormat = splitFormat[0] ? splitFormat[0] : '0';
    var decimalFormat = splitFormat[1] ? splitFormat[1] : '';

    // not NaN
    if (isNaN(Number(valueToNumber))) {
      return Number(valueToNumber);
    } else {
      try {
        var splitValue = valueToNumber.split('.');
        var comma = decimalFormat.length > 0 && value.indexOf('.') >= 0 ? '.' : '';
        var decimal = decimalFormat.length > 0 && splitValue[1] ? splitValue[1].substring(0, decimalFormat.length) : '';
        var number = splitValue[0] ? splitValue[0].toString() : '';
        number = number.length < 10 && number.length > 0 ? Number(number).toString() : number;
        if (integerFormat.indexOf(',') >= 0) {
          var splitIntegerFormat = integerFormat.split(',');
          var getcomma = splitIntegerFormat[splitIntegerFormat.length - 1] ? splitIntegerFormat[splitIntegerFormat.length - 1].length : 3;
          var pattern = new RegExp('(-?\\d+)(\\d{' + getcomma + '})'); // /(-?\d+)(\d{3})/;

          while (pattern.test(number)) {
            number = number.replace(pattern, '$1,$2');
          }return '' + number + comma + decimal;
        } else {
          return '' + number + comma + decimal;
        }
      } catch (e) {
        return valueToNumber;
      }
    }
  } else {
    return value;
  }
}

var isRequired = exports.isRequired = function isRequired() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length <= 0;
};

function isNumber(value) {
  var checkValue = toNumber(value);
  return !isNaN(Number(checkValue));
}

var isEmail = exports.isEmail = function isEmail(value) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(value);
};

var verifyField = exports.verifyField = function verifyField() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (value !== '' || rules.required) {
    for (var key in rules) {
      var typeofRules = _typeof(rules[key]);
      if (typeofRules === 'number' || typeofRules === 'string') {
        switch (key) {
          case 'required':
            {
              if (isEmpey(value)) return rules[key];
              break;
            }
          case 'number':
            {
              if (!isNumber(value)) return rules[key];
              break;
            }
          case 'email':
            {
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