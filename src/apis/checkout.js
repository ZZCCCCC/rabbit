import httpInstance from "@/utils/http"

// 获取订单详情
export const getCheckInfoAPI = () => {
    return httpInstance({
        url: '/member/order/pre',
    })
}

// 创建订单
export const createOrderAPI = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'post',
        data
    })
}