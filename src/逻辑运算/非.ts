import { 等于 } from '../通用/等于.js'

export type 非<a> = a extends true ? false : true

var _a1: 等于<非<true>, false> = true
var _a2: 等于<非<false>, true> = true
