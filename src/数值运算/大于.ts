// https://github.com/type-challenges/type-challenges/issues/16821

import { 等于 } from '../通用/等于.js'

type Length<T extends any[]> = T['length']
type 大于<A extends number, B extends number, N extends any[] = []> =
  Length<N> extends A ? false : Length<N> extends B ? true : 大于<A, B, [...N, any]>

var _a1: 等于<大于<1, 2>, false> = true
var _a2: 等于<大于<3, 2>, true> = true
