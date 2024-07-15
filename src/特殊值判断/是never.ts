// https://github.com/type-challenges/type-challenges/issues/4322

import { 等于 } from '../通用/等于.js'

export type 是never<T> = [T] extends [never] ? true : false

var _a1: 等于<是never<never>, true> = true
var _a1: 等于<是never<unknown>, false> = true
var _a1: 等于<是never<[]>, false> = true
var _a1: 等于<是never<{}>, false> = true
var _a1: 等于<是never<any>, false> = true
