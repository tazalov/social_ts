import { ProfileT } from '../../redux/profile-reducer'
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
  async updatePhoto(photo: File) {
    const formData = new FormData()
    formData.append('image', photo)
    const response = await social.put(`profile/photo`, formData)
    return response.data
  },
  async updateProfile(profile: Omit<ProfileT, 'photos'>) {
    const response = await social.put(`profile`, profile)
    return response.data
  },
}
