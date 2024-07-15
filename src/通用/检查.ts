import { 等于 } from './等于.js'
import { 错误 } from './错误.js'

export type 检查<条件组 extends any[], 正确值> = 条件组 extends []
  ? 正确值
  : 条件组 extends [infer a, ...infer as]
    ? a extends true
      ? 检查<as, 正确值>
      : a
    : 错误<['检查:', '解构失败', 条件组]>

var _a1: 等于<检查<[true, true], 1>, 1> = true
var _a1: 等于<检查<[true, 错误<'错误'>], 1>, 错误<'错误'>> = true
var _a1: 等于<检查<[true, 错误<'错误'>, true], 1>, 错误<'错误'>> = true
