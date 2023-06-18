
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
// import { getCategory } from './apis/testapi'


// 测试接口函数
// getCategory().then(res => { console.log(res); })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
