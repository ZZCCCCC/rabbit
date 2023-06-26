
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives/index.js'
import { componentPlugin } from "@/components";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(componentPlugin)
// 引入懒加载
app.use(lazyPlugin)

app.mount('#app')
