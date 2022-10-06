const __ERROR__: unique symbol = Symbol()

export interface 错误<msg extends string | any[] = ''> {
    [__ERROR__]: true
    msg: msg
}
