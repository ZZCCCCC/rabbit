import httpInstance from "@/utils/http";

export function getBannerAPI(params = {}) {
    const { distriubutionSite = '1' } = params
    return httpInstance({
        url: 'home/banner',
        params: {
            distriubutionSite
        }
    })
}

export const getNew = () => {
    return httpInstance({
        url: 'home/new'
    })
}

export const getHot = () => {
    return httpInstance({
        url: 'home/hot'
    })
}

export const getGoodsAPI = () => {
    return httpInstance({
        url: 'home/goods'
    })
}