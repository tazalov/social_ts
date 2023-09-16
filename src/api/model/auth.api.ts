import { social } from '../config/api.config'

export const authAPI = {
  async getUserData() {
    const response = await social.get('auth/me')
    return response.data
  },
  async login(email: string, password: string, rememberMe: boolean) {
    const response = await social.post('auth/login', { email, password, rememberMe, captcha: true })
    return response.data
  },
  logout() {
    return social.delete(`auth/login`)
  },
}
