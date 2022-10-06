import { 数组反转 } from './数组反转'
import { 等于 } from '../通用/等于'

export type 删除数组最后一个<Arr> = 数组反转<Arr> extends [infer a, ...infer as] ? 数组反转<as> : never

var a1: 等于<删除数组最后一个<[1, 2, 3]>, [1, 2]> = true
