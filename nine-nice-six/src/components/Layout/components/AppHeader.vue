<template>
    <div class="nav">
        <!-- <van-nav-bar title="标题" v-if="$route.meta.home" class="nav"/> -->


        <!-- 可返回上一级 -->
        <van-nav-bar title="频道" v-if="$route.meta.more" left-text="返回" left-arrow @click-left="onClickLeft"
            class="Hchannel" />

        <!-- 搜索页的 -->
        <form action="/" v-if="$route.meta.search" class="tSearch" >
           <van-search
             v-model="value"
             show-action
             placeholder="请输入搜索关键词"
             @focus="onfocus"
             @search="onSearch" 
             @cancel="onCancel" 
             class="censearch"
  />
</form>



        <!-- 右侧按钮 -->
        <van-nav-bar title="话题" v-if="false" right-text="+" left-arrow @click-left="onClickLeft"
            @click-right="onClickRigh" />
        <!-- 自定义插槽 -->
        <van-nav-bar title="标题" v-if="false" left-text="返回" left-arrow>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { showToast } from 'vant';
const $route = useRoute()
console.log(useRoute)


const onClickLeft = () => history.back();

const onClickRigh = () => showToast('按钮');

// 搜索区域
const value = ref<number | string>('')
const searList = ref<boolean>(false)
const onSearch = ()=>{
  console.log('回车触发')
}
const onCancel = ()=>{
    searList.value = false
//   console.log('取消触发')
//   console.log(searList.value)

}
const onfocus = ()=>{
   searList.value = true
//    console.log(searList.value)
}

</script>

<style scoped lang="scss">
.nav {
    width: 100%;
    height: 100%;

    .Hchannel {
        padding: 1.875rem 0;
    }
    .tSearch{
        background-color: #0b2c32;
        padding: 1.25rem;
        .censearch{
            border-radius: 1.25rem;
            padding-right:1.25rem ;
           
        }
    }



}
</style>