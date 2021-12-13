export type 数组长度判定<arr, n> = arr extends any[] ? (arr['length'] extends n ? true : false) : never
