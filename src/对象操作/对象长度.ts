import { 等于 } from '../通用/等于.js'
import { 取对象键们 } from './取对象键们.js'

export type 取对象长度<obj> =
  obj extends Record<string, unknown>
    ? 取对象键们<obj>['length'] extends infer n
      ? n extends number
        ? n
        : never
      : never
    : never

var _a1: 等于<取对象长度<{ a: 1; b: 'b' }>, 2> = true
