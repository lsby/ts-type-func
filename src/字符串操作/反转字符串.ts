import { 等于 } from '../通用/等于.js'

export type 反转字符串<剩余字符串> = 剩余字符串 extends ''
  ? ''
  : 剩余字符串 extends `${infer a}${infer as}`
    ? `${反转字符串<as>}${a}`
    : never

var _a1: 等于<反转字符串<'abc'>, 'cba'> = true
