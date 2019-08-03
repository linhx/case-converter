import { NON_VARIABLE_CHAR_REGEX } from '@/constants'

const SEPARATOR_CHAR = ' '

function isString (str) {
  return str && typeof str === 'string'
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
  if (!isString(str)) return ''
  let result = {
    camelCase: '',
    snakeCase: '',
    kebabCase: '',
    pascalCase: '',
    upperCase: '',
    upperSnakeCase: ''
  }
  result.upperCase = str.toUpperCase()

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

export default {
  convert
}
