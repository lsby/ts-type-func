import { error } from './error'

export type 检查<条件组 extends any[], 正确值> = 条件组 extends []
    ? 正确值
    : 条件组 extends [infer a, ...infer as]
    ? a extends true
        ? 检查<as, 正确值>
        : a
    : error<['检查:', '解构失败', 条件组]>
