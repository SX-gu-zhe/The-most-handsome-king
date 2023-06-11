<template>
    <div class="ban">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
            <!-- <van-swipe-item><img src="../../img/OIP-C (2).jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../img/OIP-C (3).jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../img/OIP-C (4).jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../img/OIP-C (5).jpg" alt=""></van-swipe-item> -->
        <van-swipe-item v-for="item in bannerList" :key="item.bannerid" class="ban">
        <img :src="item.img" alt="">
        </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getBannerListApi } from '@/api/banner';
import { onMounted } from 'vue';


const bannerList = ref<BannerNS.IBannerItem[]>([])

onMounted(() => {
    getBannerListApi().then((res)=>{
        bannerList.value = res 
        // console.log(bannerList)
    })
})
</script> 

<style scoped lang="scss">
.ban{
    width: 100%;
    height:13.5rem;
    .my-swipe{
        width: 100%;
        height: 100%;
          img{
    width: 100%;
    height: 100%;
    }
 
} 
}

</style>