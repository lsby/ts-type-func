import { 等于 } from './类型等价判定'

export type 判定双层数组<arr> = arr extends [infer a] ? (a extends any[] ? true : false) : false

var a: 等于<判定双层数组<1>, false> = true
var a: 等于<判定双层数组<[1]>, false> = true
var a: 等于<判定双层数组<[[1]]>, true> = true
