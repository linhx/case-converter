export const NON_VARIABLE_CHAR_REGEX = /[^A-z0-9$]/g
export const CAMEL_CASE = /^[a-z$_]+([A-Z][a-z0-9]*)*$/
export const PASCAL_CASE = /^([A-Z$_][a-z0-9]*)+$/
export const SNAKE_CASE = /^([a-z$]+_?)([a-z0-9]+_)*[a-z0-9]+$/
export const UPPER_SNAKE_CASE = /^([A-Z$]+_?)([A-Z0-9]+_)*[A-Z0-9]+$/
export const KEBAB_CASE = /^([a-z$]+-?)([a-z0-9]+-)*[a-z0-9]+$/
