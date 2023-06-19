
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { useIntersectionObserver } from "@vueuse/core";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// 自定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        // el:绑定的元素
        // binding：指令对象  binding.value   指的时等号后面表达式的值
        console.log(el, binding.value);

        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                // console.log(isIntersecting);
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value
                }
            },
        )
    }
})