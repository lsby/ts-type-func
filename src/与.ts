import { 等于 } from './类型等价判定'

export type 与<a1, a2> = a1 extends true ? (a2 extends true ? true : false) : false

var a: 等于<与<true, true>, true> = true
var a: 等于<与<true, false>, false> = true
var a: 等于<与<false, true>, false> = true
var a: 等于<与<false, false>, false> = true
