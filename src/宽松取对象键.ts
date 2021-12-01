import { 联合转元组, 类型等价判定 } from '.'

export type 宽松取对象键<obj> = 联合转元组<keyof obj> extends infer r ? (r extends string[] ? r : never) : never

var 测试01: 类型等价判定<宽松取对象键<{ a: 1 }>, ['a']> = true
var 测试01: 类型等价判定<宽松取对象键<{ a: 1; b: 2 }>, ['a', 'b']> = true
