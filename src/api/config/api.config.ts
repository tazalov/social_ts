import axios from 'axios'

export const social = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'b8ade8b2-587b-4098-8840-48ea374583b5' },
})
