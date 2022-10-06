import { 基础类型等于 } from './基础类型等价判定'
import { 等于 } from './类型等价判定'

export type 删除数组指定内容<arr, 内容> = arr extends []
    ? []
    : arr extends [infer a, ...infer as]
    ? 基础类型等于<a, 内容> extends true
        ? 删除数组指定内容<as, 内容>
        : [a, ...删除数组指定内容<as, 内容>]
    : never

var a1: 等于<删除数组指定内容<[1, 2, 3], 1>, [2, 3]> = true
var a1: 等于<删除数组指定内容<[1, 2, 3], 2>, [1, 3]> = true
