import { 等于 } from '../通用/等于.js'

// https://github.com/type-challenges/type-challenges/issues/2835
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer U) => any ? U : never
type LastUnion<T> = UnionToIntersection<T extends any ? (x: T) => any : never> extends (x: infer L) => any ? L : never
export type 联合转元组<T, Last = LastUnion<T>> = [T] extends [never] ? [] : [...联合转元组<Exclude<T, Last>>, Last]

var _a1: 等于<联合转元组<1 | 2 | 3>, [1, 2, 3]> = true
