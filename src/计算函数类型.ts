import { 类型等价判定 } from './类型等价判定'

type 函数参数处理<x> = x extends [infer a] ? a : never
type 函数参数们处理<arr extends any[]> = arr extends []
    ? []
    : arr extends [infer a]
    ? [函数参数处理<[a]>]
    : arr extends [infer a, ...infer as]
    ? [函数参数处理<[a]>, ...函数参数们处理<as>]
    : never
export type 计算函数类型<f> = f extends (...args: any) => any ? [函数参数们处理<Parameters<f>>, ReturnType<f>] : never

var 测试01: 类型等价判定<计算函数类型<(a: string) => number>, [[string], number]> = true
var 测试02: 类型等价判定<计算函数类型<(a: string, b: number) => number>, [[string, number], number]> = true
