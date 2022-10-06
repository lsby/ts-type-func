import { error, 等于 } from '.'

export type 计算条件<条件或错误, 返回值> = 条件或错误 extends infer r
    ? r extends true
        ? 返回值
        : r
    : error<'计算约束失败'>

var a: 等于<计算条件<true, 1>, 1> = true
var a: 等于<计算条件<error<'错误'>, 1>, error<'错误'>> = true
