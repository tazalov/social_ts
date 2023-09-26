import axios from 'axios'

export const social = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '2d8c1a33-12eb-40f1-a075-8aabb634963c' },
})
