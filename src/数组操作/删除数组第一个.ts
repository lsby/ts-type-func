import { 等于 } from '../通用/等于'

export type 删除数组第一个<Arr> = Arr extends [infer a, ...infer as] ? as : never

var a1: 等于<删除数组第一个<[1, 2, 3]>, [2, 3]> = true
