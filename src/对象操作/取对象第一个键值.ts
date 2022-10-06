import { 取对象键们 } from './取对象键们'
import { 等于 } from '../通用/等于'

export type 取对象第一个键值<obj> = 取对象键们<obj> extends infer keys
    ? keys extends []
        ? never
        : keys extends [infer a, ...infer as]
        ? a extends keyof obj
            ? [a, obj[a]]
            : never
        : never
    : never

var a: 等于<取对象第一个键值<{ a: 1; b: '2' }>, ['a', 1]> = true
