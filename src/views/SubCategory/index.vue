<script setup>
import GoodsItem from "@/views/Home/components/GoodsItem.vue";
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const categoryData = ref({});
const route = useRoute();
const getCategoryData = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  categoryData.value = res.result;
  //   console.log(res.result);
};

onMounted(() => {
  getCategoryData();
});

// 基础列表
const goodsList = ref([]);
const disabled = ref(false);
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const getGoodsList = async () => {
  const res = await getSubCategoryAPI(reqData.value);
  goodsList.value = res.result.items;
  //   console.log(res.result);
};
// tab切换
const tabChange = () => {
  reqData.value.page = 1;
  getGoodsList();
};
// 加载更多
const load = async () => {
  reqData.value.page++;
  const { result } = await getSubCategoryAPI(reqData.value);
  //   console.log(result.items);
  //   拼接数组
  goodsList.value = [...goodsList.value, ...result.items];

  //   没有更多的商品
  if (result.items.length === 0) {
    disabled.value = true;
  }
};

onMounted(() => {
  getGoodsList();
});
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }"
          >{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-click="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <goods-item
          v-for="good in goodsList"
          :key="good.id"
          :good="good"
        ></goods-item>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>