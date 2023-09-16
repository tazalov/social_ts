import axios from 'axios'

export const social = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'f1d78536-b1c3-4491-8bbf-d14c6a0d7926' },
})
