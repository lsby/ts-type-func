import { 联合转元组 } from '../类型转换/联合转元组.js'
import { 等于 } from '../通用/等于.js'

export type 取对象键们<obj> = 联合转元组<keyof obj> extends infer r ? (r extends string[] ? r : never) : never

var _a1: 等于<取对象键们<{ a: 1; b: '2' }>, ['a', 'b']> = true
var _a1: 等于<取对象键们<{ a: 1 }>, ['a']> = true
var _a1: 等于<取对象键们<{}>, []> = true
