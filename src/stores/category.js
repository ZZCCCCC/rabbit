import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {

    // 初始化列表项 state
    const categoryList = ref([])
    // action
    const getCategoryList = async () => {
        const res = await getCategoryAPI()
        // console.log(res);
        categoryList.value = res.result

        // console.log(categoryList.value);
    }

    return { categoryList, getCategoryList }
})
