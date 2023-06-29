import httpInstance from "@/utils/http";
export const loginAPI = ({ account, password }) => {
    return httpInstance({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}

export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}