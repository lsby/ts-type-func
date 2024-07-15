import { 等于 } from '../通用/等于.js'

export type 判定双层数组<arr> = arr extends [infer a] ? (a extends any[] ? true : false) : false

var _a1: 等于<判定双层数组<1>, false> = true
var _a1: 等于<判定双层数组<[1]>, false> = true
var _a1: 等于<判定双层数组<[[1]]>, true> = true
