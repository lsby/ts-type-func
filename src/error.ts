export interface error<msg extends string> {
    __ERROR__: true
    msg: msg
}
export type 是error<值> = 值 extends error<infer msg> ? true : false
