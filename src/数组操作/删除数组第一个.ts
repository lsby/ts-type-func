import { 等于 } from '../通用/等于.js'

export type 删除数组第一个<Arr> = Arr extends [any, ...infer as] ? as : never

var _a1: 等于<删除数组第一个<[1, 2, 3]>, [2, 3]> = true
