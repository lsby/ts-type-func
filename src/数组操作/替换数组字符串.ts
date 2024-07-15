import { 等于 } from '../通用/等于.js'

export type 替换数组字符串<数组, 旧值, 新值> = 数组 extends []
  ? []
  : 数组 extends [infer a, ...infer as]
    ? a extends 旧值
      ? [新值, ...替换数组字符串<as, 旧值, 新值>]
      : [a, ...替换数组字符串<as, 旧值, 新值>]
    : never

var _a1: 等于<替换数组字符串<['a', 'b', 'c'], 'a', 'd'>, ['d', 'b', 'c']> = true
