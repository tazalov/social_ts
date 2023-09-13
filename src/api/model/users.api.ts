import { social } from '../config/api.config'

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
