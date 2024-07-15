import { 等于 } from '../通用/等于.js'
import { 求和 } from './求和.js'

export type 后继数<a extends string | number> = 求和<a, 1>

var _a1: 等于<后继数<1>, '2'> = true
var _a1: 等于<后继数<'1'>, '2'> = true
var _a1: 等于<后继数<2>, '3'> = true
