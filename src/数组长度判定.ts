import { 等于 } from './类型等价判定'

export type 数组长度判定<arr, n> = arr extends any[] ? (arr['length'] extends n ? true : false) : never

var a1: 等于<数组长度判定<[1, 2, 3], 3>, true> = true
var a1: 等于<数组长度判定<[1, 2, 3], 2>, false> = true
