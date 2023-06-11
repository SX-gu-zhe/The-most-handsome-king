<template>
    <div class="homeHeate">
        <van-tabs v-model:active="active" v-if="$route.meta.home"
        background="#0b3136" color="#d89753" swipeable >
            <van-tab color="white" class="ttt" title="推荐">
          <HomeRecommend/>
            </van-tab>
            <van-tab color="white" class="ttt" title="DOM1">
                <HomeRecommend/>
            </van-tab>
            <van-tab color="white" class="ttt" title="DOM2">
   
            </van-tab>
            <van-tab color="white" class="ttt" title="DOM3">
    
            </van-tab>
            <van-tab color="white" class="ttt" title="DOM1">
         
            </van-tab>
            <van-tab color="white" class="ttt" title="DOM1">
           
            </van-tab>
            <van-tab color="white" class="ttt" title="DOM1">
          
            </van-tab>
        </van-tabs>

    </div>
</template>

<script setup lang="ts">
import HomeRecommend from './HomeHeader/HomeRecommend.vue';
import { ref } from 'vue'
const active = ref(0)


</script>

<style scoped lang="scss">
.homeHeate{
    height: 100%;
    width: 100%;
}
</style>