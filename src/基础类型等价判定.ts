import { 与 } from './与'
import { 是基础类型 } from './是基础类型'
import { 等于 } from './类型等价判定'

export type 基础类型等于<a1, a2> = 与<是基础类型<a1>, 是基础类型<a2>> extends true
    ? a1 extends a2
        ? a2 extends a1
            ? true
            : false
        : false
    : false

var a: 等于<基础类型等于<true, true>, true> = true
var a: 等于<基础类型等于<1, 1>, true> = true
var a: 等于<基础类型等于<number, number>, true> = true
var a: 等于<基础类型等于<number, 1>, false> = true
var a: 等于<基础类型等于<string, string>, true> = true
var a: 等于<基础类型等于<string, 'a'>, false> = true
var a: 等于<基础类型等于<[], []>, false> = true
var a: 等于<基础类型等于<[1], []>, false> = true
