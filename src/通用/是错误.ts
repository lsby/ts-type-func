import { 错误 } from './错误.js'

export type 是错误<值> = 值 extends 错误<any> ? true : false
