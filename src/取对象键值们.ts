import { 类型等价判定 } from './类型等价判定'
import { 联合转元组 } from './联合转元组'

export type 取对象键值们<
    // obj extends Record<string, unknown>,
    obj,
    剩余的键 extends any[] = 联合转元组<keyof obj>,
> = 剩余的键 extends []
    ? []
    : 剩余的键 extends [infer a, ...infer as]
    ? a extends keyof obj
        ? [[a, obj[a]], ...取对象键值们<obj, as>]
        : never
    : never

var 测试01: 类型等价判定<取对象键值们<{ a: 1 }>, [['a', 1]]> = true
var 测试02: 类型等价判定<取对象键值们<{ a: 1; b: 2 }>, [['a', 1], ['b', 2]]> = true
var 测试03: 类型等价判定<取对象键值们<{ a: 1; b: '2' }>, [['a', 1], ['b', '2']]> = true
