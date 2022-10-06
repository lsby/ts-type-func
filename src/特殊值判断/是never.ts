// https://github.com/type-challenges/type-challenges/issues/4322

import { 等于 } from '../通用/等于'

export type 是never<T> = [T] extends [never] ? true : false

var a1: 等于<是never<never>, true> = true
var a1: 等于<是never<unknown>, false> = true
var a1: 等于<是never<[]>, false> = true
var a1: 等于<是never<{}>, false> = true
var a1: 等于<是never<any>, false> = true
