import { 是never } from '../特殊值判断/是never.js'
import { 等于 } from '../通用/等于.js'

export type 取数组第一个<Arr> = Arr extends [infer a, ...any] ? a : never

var _a1: 等于<取数组第一个<[1, 2, 3]>, 1> = true
var _a1: 等于<取数组第一个<[1]>, 1> = true
var _a1: 等于<是never<取数组第一个<[]>>, true> = true
