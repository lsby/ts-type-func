import { 等于 } from '../通用/等于.js'

export type 数字转字符串<n> = n extends number ? `${n}` : never

var _a1: 等于<数字转字符串<1>, '1'> = true
