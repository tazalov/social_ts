import { social } from '../config/api.config'

export const authAPI = {
  async getUserData() {
    const response = await social.get('auth/me')
    return response.data
  },
  async login(email: string, password: string, rememberMe: boolean, captcha: string) {
    const response = await social.post('auth/login', {
      email,
      password,
      rememberMe,
      captcha: captcha || '',
    })
    return response.data
  },
  async logout() {
    const response = await social.delete(`auth/login`)
    return response.data
  },
  async getCaptcha() {
    const response = await social.get('security/get-captcha-url')
    return response.data
  },
}
