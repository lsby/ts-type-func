import { 等于 } from './类型等价判定'

export type 字符串以某值开头<s extends string, A> = A extends `${s}${infer a}` ? true : false

var a1: 等于<字符串以某值开头<'a', 'abc'>, true> = true
var a1: 等于<字符串以某值开头<'ab', 'abc'>, true> = true
var a1: 等于<字符串以某值开头<'c', 'abc'>, false> = true
