// https://github.com/type-challenges/type-challenges/issues/1520

import { 等于 } from '../通用/等于.js'

type NumberMap = {
  '0': []
  '1': [1]
  '2': [1, 1]
  '3': [1, 1, 1]
  '4': [1, 1, 1, 1]
  '5': [1, 1, 1, 1, 1]
  '6': [1, 1, 1, 1, 1, 1]
  '7': [1, 1, 1, 1, 1, 1, 1]
  '8': [1, 1, 1, 1, 1, 1, 1, 1]
  '9': [1, 1, 1, 1, 1, 1, 1, 1, 1]
}

type NumberKeys = keyof NumberMap

type Multiply10<T extends ReadonlyArray<any> = []> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

export type 字符串转数字<X extends string, A extends any[] = []> = X extends `${infer L}${infer T}`
  ? L extends NumberKeys
    ? 字符串转数字<T, [...Multiply10<A>, ...NumberMap[L]]>
    : never
  : A['length']

var _a1: 等于<字符串转数字<'1'>, 1> = true
