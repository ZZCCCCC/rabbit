import httpInstance from "@/utils/http";

export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
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