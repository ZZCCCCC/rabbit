
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])

    const addCart = (goods) => {

        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        console.log(item);
        if (item) {
            // 已添加   count+1
            item.count++
        } else {
            // 未添加   push
            cartList.value.push(goods)
        }

    }

    return { cartList, addCart }
}, { persist: true })