import { 等于 } from '../通用/等于.js'

export type 字符串以某值开头<s extends string, A> = A extends `${s}${any}` ? true : false

var _a1: 等于<字符串以某值开头<'a', 'abc'>, true> = true
var _a1: 等于<字符串以某值开头<'ab', 'abc'>, true> = true
var _a1: 等于<字符串以某值开头<'c', 'abc'>, false> = true
