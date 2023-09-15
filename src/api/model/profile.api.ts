import { social } from '../config/api.config'

export const profileAPI = {
  async getProfile(userId: string) {
    const response = await social.get(`profile/${userId}`)
    return response.data
  },
  async getProfileFriends() {
    const response = await social.get('users?count=6&friend=true')
    return response.data
  },
  async getStatus(userId: string) {
    const response = await social.get(`profile/status/${userId}`)
    return response.data
  },
  async updateStatus(status: string) {
    const response = await social.put(`profile/status`, { status })
    return response.data
  },
}
