import { 类型等价判定 } from './类型等价判定'

export type 去除单层数组<Arr extends any[]> = Arr extends [infer a] ? a : Arr

var a1: 类型等价判定<去除单层数组<[1]>, 1> = true
var a2: 类型等价判定<去除单层数组<[[1]]>, [1]> = true
var a3: 类型等价判定<去除单层数组<[[1, 2]]>, [1, 2]> = true
var a4: 类型等价判定<去除单层数组<[[1], 3]>, [[1], 3]> = true
