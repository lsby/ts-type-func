import { 等于 } from '../通用/等于.js'

export type 数组存在元素<数组, 值> = 数组 extends []
  ? false
  : 数组 extends [infer a, ...infer as]
    ? 等于<a, 值> extends true
      ? true
      : 数组存在元素<as, 值>
    : never

var _a1: 等于<数组存在元素<[1, 2, 3], 1>, true> = true
var _a1: 等于<数组存在元素<[1, 2, 3], 2>, true> = true
var _a1: 等于<数组存在元素<[1, 2, [1, 2]], [1, 2]>, true> = true
var _a1: 等于<数组存在元素<[1, 2, [1, 2]], [1, 2, 3]>, false> = true
var _a1: 等于<数组存在元素<[1, 2, { a: 1 }], { a: 1 }>, true> = true
var _a1: 等于<数组存在元素<[1, 2, { a: 1 }], {}>, false> = true
