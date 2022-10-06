import { 是never } from './是never'
import { 等于 } from './类型等价判定'

export type 取数组第一个<Arr> = Arr extends [infer a, ...infer as] ? a : never

var a: 等于<取数组第一个<[1, 2, 3]>, 1> = true
var a: 等于<取数组第一个<[1]>, 1> = true
var a: 等于<是never<取数组第一个<[]>>, true> = true
