import { error } from './error'

export type 以s开头<s extends string, A> = A extends `${s}${infer a}` ? true : error<[A, `必须以${s}开头`]>
