import { 等于 } from './类型等价判定'
import { 联合转元组 } from './联合转元组'

export type 取对象值们<obj, 剩余的键 extends any[] = 联合转元组<keyof obj>> = 剩余的键 extends []
    ? []
    : 剩余的键 extends [infer a, ...infer as]
    ? a extends keyof obj
        ? [obj[a], ...取对象值们<obj, as>]
        : never
    : never

var 测试01: 等于<取对象值们<{ a: 1 }>, [1]> = true
var 测试02: 等于<取对象值们<{ a: 1; b: 2 }>, [1, 2]> = true
var 测试03: 等于<取对象值们<{ a: 1; b: '2' }>, [1, '2']> = true
