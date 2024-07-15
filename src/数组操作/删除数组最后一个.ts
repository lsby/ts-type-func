import { 等于 } from '../通用/等于.js'
import { 数组反转 } from './数组反转.js'

export type 删除数组最后一个<Arr> = 数组反转<Arr> extends [any, ...infer as] ? 数组反转<as> : never

var _a1: 等于<删除数组最后一个<[1, 2, 3]>, [1, 2]> = true
