import { 等于 } from '../通用/等于.js'

export type 或<a1, a2> = a1 extends true ? true : a2 extends true ? true : false

var _a1: 等于<或<true, true>, true> = true
var _a1: 等于<或<true, false>, true> = true
var _a1: 等于<或<false, true>, true> = true
var _a1: 等于<或<false, false>, false> = true
