import { 等于 } from '../通用/等于'

export type 元组转联合<T> = T extends any[] ? T[number] : never

var a1: 等于<元组转联合<[1, 2, 3]>, 1 | 2 | 3> = true
