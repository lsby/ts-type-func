import { 等于 } from './类型等价判定'
import { 计算函数类型 } from './计算函数类型'

type 计算数参数长度<函数> = 计算函数类型<函数>[0]['length']

var 测试01: 等于<计算数参数长度<(a: string) => number>, 1> = true
var 测试02: 等于<计算数参数长度<(a: string, b: number) => number>, 2> = true
