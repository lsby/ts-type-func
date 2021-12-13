import { 联合转元组 } from './联合转元组'

export type 取对象键<obj> = 联合转元组<keyof obj> extends infer r ? (r extends string[] ? r : never) : never
