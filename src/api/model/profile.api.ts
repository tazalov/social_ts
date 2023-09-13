import { social } from '../config/api.config'

export const profileAPI = {
  async getProfile(userId: string) {
    const response = await social.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
    )
    return response.data
  },
}
