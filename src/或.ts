import { 等于 } from './类型等价判定'

export type 或<a1, a2> = a1 extends true ? true : a2 extends true ? true : false

var a: 等于<或<true, true>, true> = true
var a: 等于<或<true, false>, true> = true
var a: 等于<或<false, true>, true> = true
var a: 等于<或<false, false>, false> = true
