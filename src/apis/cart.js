import httpInstance from "@/utils/http"

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'post',
        data: { skuId, count }
    })
}

// 获取购物车列表
export const findNewCartList = () => {
    return httpInstance({
        url: '/member/cart',
        method: 'get'
    })
}

// 删除购物车
export const delCartAPI = (ids) => {
    return httpInstance({
        url: '/member/cart',
        method: 'delete',
        data: {
            ids
        }
    })
}

// 合并购物车
export const mergeCartListAPI = (data) => {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'post',
        data

    })
}