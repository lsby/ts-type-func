import { 等于 } from '../通用/等于'

export type 反转字符串<剩余字符串> = 剩余字符串 extends ''
    ? ''
    : 剩余字符串 extends `${infer a}${infer as}`
    ? `${反转字符串<as>}${a}`
    : never

var a1: 等于<反转字符串<'abc'>, 'cba'> = true
