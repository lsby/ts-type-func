import { 联合转元组 } from '../类型转换/联合转元组.js'
import { 等于 } from '../通用/等于.js'

export type 取对象键值们<obj, 剩余的键 extends any[] = 联合转元组<keyof obj>> = 剩余的键 extends []
  ? []
  : 剩余的键 extends [infer a, ...infer as]
    ? a extends keyof obj
      ? [[a, obj[a]], ...取对象键值们<obj, as>]
      : never
    : never

var _a1: 等于<取对象键值们<{ a: 1 }>, [['a', 1]]> = true
var _a2: 等于<取对象键值们<{ a: 1; b: 2 }>, [['a', 1], ['b', 2]]> = true
var _a3: 等于<取对象键值们<{ a: 1; b: '2' }>, [['a', 1], ['b', '2']]> = true
var _a4: 等于<取对象键值们<{}>, []> = true
