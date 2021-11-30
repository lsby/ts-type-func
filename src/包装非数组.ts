import { 类型等价判定 } from '.'

export type 包装非数组<a> = a extends any[] ? a : [a]

var a1: 类型等价判定<包装非数组<1>, [1]> = true
var a2: 类型等价判定<包装非数组<[1]>, [1]> = true
