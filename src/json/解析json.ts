// https://github.com/jamiebuilds/json-parser-in-typescript-very-bad-idea-please-dont-use

import { 等于 } from '../通用/等于.js'

type ParserError<T extends string> = { error: true } & T
type EatWhitespace<State extends string> = string extends State
  ? ParserError<'EatWhitespace got generic string type'>
  : State extends ` ${infer State}` | `\n${infer State}`
    ? EatWhitespace<State>
    : State
type AddKeyValue<Memo extends Record<string, any>, Key extends string, Value extends any> = Memo & { [K in Key]: Value }
type ParseJsonObject<State extends string, Memo extends Record<string, any> = {}> = string extends State
  ? ParserError<'ParseJsonObject got generic string type'>
  : EatWhitespace<State> extends `}${infer State}`
    ? [Memo, State]
    : EatWhitespace<State> extends `"${infer Key}"${infer State}`
      ? EatWhitespace<State> extends `:${infer State}`
        ? ParseJsonValue<State> extends [infer Value, `${infer State}`]
          ? EatWhitespace<State> extends `,${infer State}`
            ? ParseJsonObject<State, AddKeyValue<Memo, Key, Value>>
            : EatWhitespace<State> extends `}${infer State}`
              ? [AddKeyValue<Memo, Key, Value>, State]
              : ParserError<`ParseJsonObject received unexpected token: ${State}`>
          : ParserError<`ParseJsonValue returned unexpected value for: ${State}`>
        : ParserError<`ParseJsonObject received unexpected token: ${State}`>
      : ParserError<`ParseJsonObject received unexpected token: ${State}`>
type ParseJsonArray<State extends string, Memo extends any[] = []> = string extends State
  ? ParserError<'ParseJsonArray got generic string type'>
  : EatWhitespace<State> extends `]${infer State}`
    ? [Memo, State]
    : ParseJsonValue<State> extends [infer Value, `${infer State}`]
      ? EatWhitespace<State> extends `,${infer State}`
        ? ParseJsonArray<EatWhitespace<State>, [...Memo, Value]>
        : EatWhitespace<State> extends `]${infer State}`
          ? [[...Memo, Value], State]
          : ParserError<`ParseJsonArray received unexpected token: ${State}`>
      : ParserError<`ParseJsonValue returned unexpected value for: ${State}`>
type ParseJsonValue<State extends string> = string extends State
  ? ParserError<'ParseJsonValue got generic string type'>
  : EatWhitespace<State> extends `null${infer State}`
    ? [null, State]
    : EatWhitespace<State> extends `true${infer State}`
      ? [true, State]
      : EatWhitespace<State> extends `false${infer State}`
        ? [false, State]
        : EatWhitespace<State> extends `"${infer Value}"${infer State}`
          ? [Value, State]
          : EatWhitespace<State> extends `[${infer State}`
            ? ParseJsonArray<State>
            : EatWhitespace<State> extends `{${infer State}`
              ? ParseJsonObject<State>
              : ParserError<`ParseJsonValue received unexpected token: ${State}`>
export type 解析json<T extends string> =
  ParseJsonValue<T> extends infer Result
    ? Result extends [infer Value, string]
      ? Value
      : Result extends ParserError<any>
        ? Result
        : ParserError<'ParseJsonValue returned unexpected Result'>
    : ParserError<'ParseJsonValue returned uninferrable Result'>

var _a1: 等于<解析json<'{"a":"1"}'>, { a: '1' }> = true
