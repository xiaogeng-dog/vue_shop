// import axios from "axios";
// import router from "../router";

// // 创建axios实例
// const service = axios.create({
//     withCredentials: true,
//     baseURL: process.env.BASE_URL,
//     timeout: 60000 // 请求超时时间
//   })

//   // request拦截器
//   service.interceptors.request.use(
//     config => {
//       /**
//        * 在request.headers添加安全网关code
//        */
//       if (localStorage.getItem('token')) {
//         config.headers.Authorization = window.sessionStorage.getItem('authorizationCode')
//       }
//       return config
//     },
//     error => {
//       // Do something with request error
//       console.log(error) // for debug
//       Promise.reject(error)
//     }
//   )

//   // response 拦截器
//   service.interceptors.response.use(
//     response => {
//       /**
//        * 获取安全网关code
//        */
//       console.log(response)
//       if (response.headers.authorization) localStorage.setItem('authorizationCode', response.headers.authorization)

//       const res = response.data
//       if (res.code === 500) {
//         Message({
//           type: 'error',
//           message: res.msg
//         })
//         return Promise.reject() // eslint-disable-line
//       } else {
//         return response.data
//       }
//     },
//     error => {
//       console.log(error)
//       console.log(error.response)
//       switch (error.response ? error.response.status : 0) {
//         case 401:
//           Message({
//             type: 'info',
//             message: '用户超时或用户登出'
//           })
//           localStorage.clear()
//           router.push({ name: 'login' })
//           break
//       }
//     }
//   )

//   export default service
