import { defineStore } from "pinia";
import { ref } from 'vue'
import { useCartStore } from "@/stores/cartStore";
import { loginAPI } from '@/apis/user'
import { mergeCartListAPI } from "@/apis/cart";


export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    const userInfo = ref({})

    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result;
        // 合并购物车
        mergeCartListAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))

        cartStore.getCartAction()

    }

    const clearInfo = () => { userInfo.value = {}, cartStore.clearList() }

    return { userInfo, getUserInfo, clearInfo }
}, {
    persist: true,
})