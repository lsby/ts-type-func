import { 等于 } from './等于'
import { 错误 } from './错误'

export type 计算条件<条件或错误, 返回值> = 条件或错误 extends infer r
    ? r extends true
        ? 返回值
        : r
    : 错误<'计算约束失败'>

var a: 等于<计算条件<true, 1>, 1> = true
var a: 等于<计算条件<错误<'错误'>, 1>, 错误<'错误'>> = true
