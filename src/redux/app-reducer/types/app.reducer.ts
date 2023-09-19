export interface AppST {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  captcha: string
  error: string
  isInitialized: boolean
}
