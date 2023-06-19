// 懒加载插件
import { useIntersectionObserver } from "@vueuse/core";
export const lazyPlugin = {
    install(app) {
        // 懒加载逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el:绑定的元素
                // binding：指令对象  binding.value   指的时等号后面表达式的值
                // console.log(el, binding.value);

                useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            // 赋值完毕后，停止监听
                            stop()
                        }
                    },
                )
            }
        })
    }
}