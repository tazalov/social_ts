import axios from 'axios'

const social = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'b8ade8b2-587b-4098-8840-48ea374583b5' },
})

export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number = 10) {
    const response = await social.get(`users?page=${currentPage}&count=${pageSize}`)
    return response.data
  },
  async followU(id: number) {
    const response = await social.post(`follow/${id}`)
    return response.data
  },
  async unfollowU(id: number) {
    const response = await social.delete(`follow/${id}`)
    return response.data
  },
}

export const profileAPI = {
  async getProfile(userId: string) {
    const response = await social.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
    )
    return response.data
  },
}
