export type 删除数组第一个<Arr> = Arr extends [infer a, ...infer as] ? as : never
