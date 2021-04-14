import axios from 'axios'
// import router from '../router/index'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
  timeout: 10000 // 请求超时
})

// request拦截器
service.interceptors.request.use(config => {
  // 根据需要对数据进行转换处理：比如需要统一加上token值那么可以做如下处理
  if (!config.params) {
    config.params = {}
  }
  const tokenType = localStorage.getItem('tokenType')
  config.headers.tokenType = tokenType
  config.headers.tokenValue = localStorage.getItem(tokenType)
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  // 根据需要对返回数据进行处理：根据前后端约定进行处理（比如用户未登录或权限过期时请求返回的处理）
  const res = response.data
  if (res) {
    switch (res.checkTokenCode) {
      case 1:
        localStorage.setItem('tokenType', 'accessToken')
        localStorage.setItem('accessToken', res.accessToken)
        break
      case 2:
        alert('请再次请求')
        localStorage.setItem('tokenType', 'refreshToken')
        break
      case 3:
        this.$router.push('/')
        break
    }
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default service
