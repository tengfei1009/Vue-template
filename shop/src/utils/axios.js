import axios from 'axios'
import { Toast } from 'vant'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '//xxx.site/api/v1' : '//xxx/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.token = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use((res) => {
  if (typeof res.data !== 'object') {
    return Promise.reject(res)
  }
  if (res.data.resultCode !== 200) {
    if (res.data.resultCode === 416) {
      if (res.data.message) {
        Toast.fail(res.data.message)
      }
      window.vRouter.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }
  return res.data
})

export default axios
