import axios from "axios";

const httpInstance = axios.create({
    // 基地址
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // 超时时间
    timeout: 5000
})
// 请求拦截器
axios.interceptors.request.use(config => config, e => Promise.reject(e))
// 响应拦截器
axios.interceptors.response.use(res => res.data, e => { return Promise.reject(e) })

export default httpInstance