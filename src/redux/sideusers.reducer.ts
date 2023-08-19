export type SideUserT = {
  id: number
  name: string
  followed: boolean
}

type InitialStateT = SideUserT[]

const initialState = [
  { id: 1, name: 'Tazazal', followed: false },
  { id: 2, name: 'Anton', followed: false },
  { id: 3, name: 'Igor', followed: false },
  { id: 4, name: 'Bukashka', followed: false },
  { id: 5, name: 'YA YA YA', followed: false },
]

export const sideUsersReducer = (state: InitialStateT = initialState, action: SideUsersAT) => {
  return state
}

export type SideUsersAT = {}
