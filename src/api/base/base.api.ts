import axios from 'axios'

export const apiBase = axios.create({
  baseURL: process.env.API_PATH,
  headers: {
    'Content-Type': 'application/json',
    'x-forwarded-for': '127.0.0.1',
  },
  withCredentials: true,
})
