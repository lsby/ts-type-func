import { 等于 } from '../通用/等于.js'

export type 删除对象指定键<obj, 删除键 extends string> = Omit<obj, 删除键>

var _a1: 等于<删除对象指定键<{ a: 1; b: '2' }, 'a'>, { b: '2' }> = true
