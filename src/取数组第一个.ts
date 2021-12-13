export type 取数组第一个<Arr> = Arr extends [infer a, ...infer as] ? a : never
