import { error } from '.'

export type 计算条件<条件或错误, 返回值> = 条件或错误 extends infer r
    ? r extends true
        ? 返回值
        : r
    : error<'计算约束失败'>
