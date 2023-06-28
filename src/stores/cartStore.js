
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from './user'
import { findNewCartList, insertCartAPI, delCartAPI } from '@/apis/cart'
export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const cartList = ref([])
    const isLogin = computed(() => userStore.userInfo.token)
    // 添加购物车
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            // 已登录
            // console.log(111);
            await insertCartAPI({ skuId, count })
            getCartAction()
        } else {
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 已添加   count+1
                item.count++
            } else {
                // 未添加   push
                cartList.value.push(goods)
            }
        }


    }
    // 获取最终的购物车
    const getCartAction = async () => {
        const res = await findNewCartList()
        cartList.value = res.result
    }
    // 清除购物车
    const clearList = () => {
        cartList.value = []
    }

    const singleCheck = (skuId, selected) => {
        // 修改单选框状态
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选
    const allCheck = (selected) => {
        cartList.value.forEach(item => { item.selected = selected })
    }
    // 删除购物车
    const delCart = async (skuId) => {
        if (isLogin.value) {
            await delCartAPI([skuId])
            getCartAction()
        } else {
            const index = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(index, 1)
        }

    }
    // 计算属性  数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 已选择的价钱
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    // 总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    return { cartList, addCart, delCart, isAll, allCount, allPrice, singleCheck, allCheck, selectedCount, selectedPrice, clearList, getCartAction }
}, { persist: true })