<template>
  <div class="tstSearch">
    <Teleport to=".appTop">
      <AppHeader />
    </Teleport>

    
    
    <ul class="searchList" v-if="listShow">
      <li v-for="item in 10 ">&emsp;11111111111<hr/></li>
    </ul>

    <!-- 最近搜索区域 -->
    <div class="searchInterest">
      <!-- 标题 -->
      <div class="searTitle">
        <p>&emsp;最近搜索</p>
        <p><van-icon name="eye-o" @click="hidden = !hidden" /> &emsp;</p>
      </div>
      <!-- 内容 -->
      <div class="searMain">
        <ul v-for="item in 10 " v-if="hidden">
          <li>123</li>
        </ul>
      </div>
    </div>

    <!-- 热门搜索区域 -->
    <div class="searchInterest">
      <!-- 标题 -->
      <div class="searTitle">
        <p>&emsp;热门搜索</p>
        <p><van-icon name="eye-o" @click="hiddenr = !hiddenr" /> &emsp;</p>
      </div>
      <!-- 内容 -->
      <div class="searMain">
        <ul v-for="item in 10 " v-if="hiddenr">
          <li>123</li>
        </ul>
      </div>
    </div>

    <div class="searchFoot"></div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/Layout/components/AppHeader.vue';
import { getSearchList, getSearchHotList } from '@/apis/goods'
import { ref ,onMounted } from 'vue'
import { useRouter } from 'vue-router';
const hidden = ref<boolean>(true)
const hiddenr = ref<boolean>(true)
const listShow = ref<boolean>(false)
const $router = useRouter()

// 接口
interface ResponseInfo {
  code: string
  message: string
}

interface Goods {
  proid: string
  brand: string
  category: string
}

interface GoodsHot {
  keyword: string
  num: number
  wordid: string
}
//

const searchList = ref<Goods[]>([])

// 准备一个变量, 表示热门搜索列表
const searchHotList = ref<GoodsHot[]>([])

// 准备一个变量, 表示搜索历史列表
const searchHistoryList = ref<string[]>([])


</script> 

<style scoped lang="scss">
.tstSearch {
  width: 100%;
  height: 100%;
  position: relative;
  .searchList{
    height: 100%;
    width: 100%;
    background-color: #fff;
    color: gray;
    line-height: 2.5rem;
    font-size: 1.25rem;
    position: absolute;
    top: 0;
    z-index: 10;
  }

  .searchInterest {

    height: 10.625rem;
    margin-bottom: 0.375rem;
    display: flex;
    // background-color: yellow;
    flex-direction: column;

    .searTitle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      line-height: 2.5rem;
      color: rgb(64, 70, 76);

      & p:last-child {
        font-size: 1.5rem;
      }
    }

    .searMain {
      padding: 0.25rem;
      flex-wrap: wrap;

      display: flex;

      ul {
        display: flex;
      }

      li {
        display: flex;
        width: 100%;
        margin: 0.375rem;
        padding: 0.25rem;
        background-color: rgba(128, 128, 128, 0.767);
        border-radius: 20%;
        box-sizing: border-box;
      }

      .hidden {
        display: none !important;
      }
    }

  }

  
  }
  
</style>