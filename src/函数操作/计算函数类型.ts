import { 等于 } from '../通用/等于.js'

type 函数参数处理<x> = x extends [infer a] ? a : never
type 函数参数们处理<arr extends any[]> = arr extends []
  ? []
  : arr extends [infer a]
    ? [函数参数处理<[a]>]
    : arr extends [infer a, ...infer as]
      ? [函数参数处理<[a]>, ...函数参数们处理<as>]
      : never
export type 计算函数类型<f> = f extends (...args: any) => any ? [函数参数们处理<Parameters<f>>, ReturnType<f>] : never

var _a1: 等于<计算函数类型<(a: string) => number>, [[string], number]> = true
var _a2: 等于<计算函数类型<(a: string, b: number) => number>, [[string, number], number]> = true
