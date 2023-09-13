export enum ResultCodeE {
  Success = 0,
  Error = 1,
}

export interface ResponseT<T = {}, RC = ResultCodeE> {
  data: T
  resultCode: RC
  messages: Array<string>
}
