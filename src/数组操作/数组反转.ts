import { 等于 } from '../通用/等于'

export type 数组反转<Arr> = Arr extends [] ? [] : Arr extends [infer a, ...infer as] ? [...数组反转<as>, a] : never

var a1: 等于<数组反转<[1, 2, 3]>, [3, 2, 1]> = true
