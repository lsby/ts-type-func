import { 等于 } from '../通用/等于.js'
import { 计算函数类型 } from './计算函数类型.js'

type 计算数参数长度<函数> = 计算函数类型<函数>[0]['length']

var _a1: 等于<计算数参数长度<(a: string) => number>, 1> = true
var _a2: 等于<计算数参数长度<(a: string, b: number) => number>, 2> = true
