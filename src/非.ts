import { 等于 } from './类型等价判定'

export type 非<a> = a extends true ? false : true

var a1: 等于<非<true>, false> = true
var a2: 等于<非<false>, true> = true
