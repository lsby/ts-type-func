export type 类型等价判定<a1, a2> = a1 extends a2 ? (a2 extends a1 ? true : false) : false
