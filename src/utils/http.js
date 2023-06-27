import axios from "axios";
import { useUserStore } from "@/stores/user";
import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";
import router from "@/router";
const httpInstance = axios.create({
    // 基地址
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // 超时时间
    timeout: 5000
})
// 请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))
// 响应拦截器
httpInstance.interceptors.response.use(res => { return res.data }, e => {
    const userStore = useUserStore()
    ElMessage({ type: 'warning', message: e.response.data.message })
    // 401token处理
    if (e.response.status === 401) {
        userStore.clearInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance