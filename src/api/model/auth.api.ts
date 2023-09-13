import { social } from '../config/api.config'

export const authAPI = {
  async getUserData() {
    const response = await social.get('auth/me')
    return response.data
  },
}
