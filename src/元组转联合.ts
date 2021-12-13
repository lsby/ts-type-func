export type 元组转联合<T> = T extends any[] ? T[number] : never
