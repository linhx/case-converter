import {
  NON_VARIABLE_CHAR_REGEX,
  CAMEL_CASE,
  PASCAL_CASE,
  SNAKE_CASE,
  UPPER_SNAKE_CASE,
  KEBAB_CASE
} from '@/constants'

const SEPARATOR_CHAR = ' '

function isString (str) {
  return str && typeof str === 'string'
}

function checkCase (str) {
  if (!isString(str)) return 0
  if (CAMEL_CASE.test(str)) return 1
  if (PASCAL_CASE.test(str)) return 2
  if (SNAKE_CASE.test(str)) return 3
  if (UPPER_SNAKE_CASE.test(str)) return 4
  if (KEBAB_CASE.test(str)) return 5
  return 0
}

function replaceNonVariableCharBySeparator (str) {
  let _str = str.replace(NON_VARIABLE_CHAR_REGEX, SEPARATOR_CHAR)
  _str = removeConsecutiveSeparator(_str)
  return _str
}

function removeConsecutiveSeparator (str) {
  let _str = str.trim()
  let result = ''
  let prevChar = ''
  for (let i = 0; i < _str.length; i++) {
    let char = _str.charAt(i)
    if (char !== SEPARATOR_CHAR || prevChar !== SEPARATOR_CHAR) {
      result += char
    }
    prevChar = char
  }
  return result
}

function convert (str) {
  let _case = checkCase(str)
  let _str
  switch (_case) {
    case 1:
      _str = convertCamelCaseToFreeText(str)
      break
    case 2:
      _str = convertPascalCaseToFreeText(str)
      break
    case 3:
    case 4:
      _str = convertSnakeCaseToFreeText(str)
      break
    case 5:
      _str = convertKebabCaseToFreeText(str)
      break
    default:
      _str = str
  }
  let result = convertFreeTextToCase(_str)
  result.upperCase = str.toUpperCase()
  return result
}

function convertFreeTextToCase (str) {
  let result = {
    camelCase: '',
    snakeCase: '',
    kebabCase: '',
    pascalCase: '',
    upperSnakeCase: ''
  }
  if (!isString(str)) return result

  let _str = replaceNonVariableCharBySeparator(str)
  if (!_str.length) return result
  _str = _str.toLowerCase()

  let isStart = true
  for (let i = 0; i < _str.length; i++) {
    let char = _str.charAt(i)
    if (char === SEPARATOR_CHAR) {
      result.snakeCase += '_'
      result.kebabCase += '-'
      isStart = true
    } else {
      result.snakeCase += char
      result.kebabCase += char
      if (isStart) {
        result.pascalCase += char.toUpperCase()
        isStart = false
      } else {
        result.pascalCase += char
      }
    }
  }
  result.camelCase = result.pascalCase.replaceAt(0, result.pascalCase.charAt(0).toLowerCase())
  result.upperSnakeCase = result.snakeCase.toUpperCase()
  return result
}

function convertSnakeCaseToFreeText (str) {
  if (!isString(str)) return ''
  return str.replace('_', ' ')
}

function convertKebabCaseToFreeText (str) {
  if (!isString(str)) return ''
  return str.replace('-', ' ')
}

function convertCamelCaseToFreeText (str) {
  if (!isString(str)) return ''
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    // eslint-disable-next-line eqeqeq
    if (char == char.toUpperCase()) {
      result += ' '
    }
    result += char
  }
  return result
}

function convertPascalCaseToFreeText (str) {
  if (!isString(str)) return ''
  let result = str.charAt(0) + convertCamelCaseToFreeText(str.substring(1, str.length))
  return result
}

export default {
  convert
}
