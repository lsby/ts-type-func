import { error } from './error'
import { 等于 } from './类型等价判定'

export type 检查<条件组 extends any[], 正确值> = 条件组 extends []
    ? 正确值
    : 条件组 extends [infer a, ...infer as]
    ? a extends true
        ? 检查<as, 正确值>
        : a
    : error<['检查:', '解构失败', 条件组]>

var a: 等于<检查<[true, true], 1>, 1> = true
var a: 等于<检查<[true, error<'错误'>], 1>, error<'错误'>> = true
var a: 等于<检查<[true, error<'错误'>, true], 1>, error<'错误'>> = true
