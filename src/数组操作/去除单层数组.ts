import { 等于 } from '../通用/等于'

export type 去除单层数组<Arr> = Arr extends [infer a] ? a : Arr

var a1: 等于<去除单层数组<[1]>, 1> = true
var a2: 等于<去除单层数组<[[1]]>, [1]> = true
var a3: 等于<去除单层数组<[[1, 2]]>, [1, 2]> = true
var a4: 等于<去除单层数组<[[1], 3]>, [[1], 3]> = true
