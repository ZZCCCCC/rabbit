import { computed, ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
    const formateType = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    let timer = null
    const time = ref(0)
    const start = (currentTime) => {
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)

    }
    // 组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formateType, start
    }
}