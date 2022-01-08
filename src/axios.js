import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

// 拦截器
axios.defaults.baseURL = "http://222.186.36.138:9017"

axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(response => {
    let res = response.data;
    if (res.code === 200) {
      return response
    } else {

      Element.Message.error('账号或密码错误', {duration: 3 * 1000})

      return Promise.reject(response.data.msg)
    }
  },
  error => {
    console.log(error)
    if(error.response.data) {
      error.message = error.response.data.msg
    }

    if(error.response.status === 401) {
      store.commit("REMOVE_INFO")
      router.push("/login")
    }

    Element.Message.error(error.message, {duration: 3 * 1000})
    return Promise.reject(error)
  }
)