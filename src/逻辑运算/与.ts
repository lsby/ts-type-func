import { 等于 } from '../通用/等于.js'

export type 与<a1, a2> = a1 extends true ? (a2 extends true ? true : false) : false

var _a1: 等于<与<true, true>, true> = true
var _a1: 等于<与<true, false>, false> = true
var _a1: 等于<与<false, true>, false> = true
var _a1: 等于<与<false, false>, false> = true
