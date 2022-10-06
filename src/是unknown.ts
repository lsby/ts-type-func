import { 等于 } from './类型等价判定'

export type 是unknown<T> = unknown extends T ? true : false

var a1: 等于<是unknown<1>, false> = true
var a1: 等于<是unknown<never>, false> = true
var a1: 等于<是unknown<[]>, false> = true
var a1: 等于<是unknown<{}>, false> = true
var a1: 等于<是unknown<unknown>, true> = true
