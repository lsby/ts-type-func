import { 等于 } from '../通用/等于.js'

export type 数组过滤<arr, 内容> = arr extends []
  ? []
  : arr extends [infer a, ...infer as]
    ? 等于<a, 内容> extends true
      ? 数组过滤<as, 内容>
      : [a, ...数组过滤<as, 内容>]
    : never

var _a1: 等于<数组过滤<[1, 2, 3], 1>, [2, 3]> = true
var _a1: 等于<数组过滤<[1, 2, 3], 2>, [1, 3]> = true
