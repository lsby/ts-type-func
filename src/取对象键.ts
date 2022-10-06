import { 等于 } from './类型等价判定'
import { 联合转元组 } from './联合转元组'

export type 取对象键们<obj> = 联合转元组<keyof obj> extends infer r ? (r extends string[] ? r : never) : never

var a: 等于<取对象键们<{ a: 1; b: '2' }>, ['a', 'b']> = true
var a: 等于<取对象键们<{ a: 1 }>, ['a']> = true
var a: 等于<取对象键们<{}>, []> = true
