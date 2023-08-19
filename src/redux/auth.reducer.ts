export type InitialStateT = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

const initialState: InitialStateT = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action: AuthAT) => {
  switch (action.type) {
    case 'social/auth/SET_USER_DATA': {
      return {
        ...state,
        ...action.payload,
        isAuth: action.isAuth,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export type AuthAT = SetUserDataAT

export type PayloadT = {} | InitialStateT

type SetUserDataAT = {
  type: 'social/auth/SET_USER_DATA'
  payload: PayloadT
  isAuth: boolean
}

export const setUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
) => ({
  type: 'social/auth/SET_USER_DATA',
  payload: {
    id,
    login,
    email,
  },
  isAuth,
})
