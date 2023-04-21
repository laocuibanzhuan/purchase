import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/token.js'

const axiosReq = axios.create({
  timeout: 3000,
  baseURL: 'http://127.0.0.1:5172'
})

axiosReq.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosReq.interceptors.response.use(
  response => {
    let res = response.data
    if (res.status !== true) {
      ElMessage({
        message: 'Server error:' + res.statusText,
        type: 'error',
        duration: 5000
      })
      return Promise.reject(new Error(res.statusText || 'Error'))
    } else {
      return res
    }
  },
  error => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5000
    })
    return Promise.reject(new Error(error.message))
  }
)

export default axiosReq
