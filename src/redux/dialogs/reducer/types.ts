export interface DialogsListItemT {
  id: number
  name: string
}

export interface DialogsMessageT {
  id: number
  message: string
}

export interface DialogsST {
  list: DialogsListItemT[]
  messages: DialogsMessageT[]
}
