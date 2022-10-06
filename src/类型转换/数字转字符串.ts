import { 等于 } from '../通用/等于'

export type 数字转字符串<n> = n extends number ? `${n}` : never

var a1: 等于<数字转字符串<1>, '1'> = true
