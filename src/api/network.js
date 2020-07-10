
//封装网络请求

import axios from 'axios'



// 进行一些全局配置
axios.defaults.baseURL = ' http://localhost:3000/'
// axios.defaults.baseURL = 'http://music.it666.com:3666/'
axios.defaults.timeout = 5000




//封装自己的get/post的方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, { params: data })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
      
  },

  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, data)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })

  }
}