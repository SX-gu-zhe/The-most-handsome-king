<template>
    <div class="appChannel">
        <Teleport to=".appTop">
            <AppHeader />
        </Teleport>

        <van-tabs v-model:active="active" @click-tab="onClickTab"  class="van-tabs">
            <van-tab >
                <template #title> <van-icon name="more-o" />解説 </template>
                <CSpeck />
            </van-tab>
            <van-tab title="更多"><img style="width: 100%;height: 100%;" src="https://s.6600.cn/p/9/64/0836c91600d58d1f.jpg" alt="">
                <img style="width: 100%;height: 100%;" src="https://s.6600.cn/p/9/64/0836c91600d58d1f.jpg" alt=""><img style="width: 100%;height: 100%;" 
                src="https://s.6600.cn/p/9/64/0836c91600d58d1f.jpg" alt=""><img style="width: 100%;height: 100%;" 
                src="https://s.6600.cn/p/9/64/0836c91600d58d1f.jpg" alt=""><img style="width: 100%;height: 100%;" 
                src="https://s.6600.cn/p/9/64/0836c91600d58d1f.jpg" alt=""><img style="width: 100%;height: 100%;" 
                src="https://s.6600.cn/p/9/64/0836c91600d58d1f.jpg" alt=""></van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/Layout/components/AppHeader.vue';
import CSpeck from '@/views/channel/components/CSpeck.vue'
import { ref } from 'vue';
import { showToast } from 'vant';
const active = ref(0);
const title = ref('')
const onClickTab = ({ title }) => showToast(title); // 沒搞會怎麽用


</script>

<style scoped lang="scss">
.appChannel {
    width: 100%;
    height: 100%;
    // background-color: red;
    background-color: #093038;

    .van-tabs {
        
        background-color: #093038;

    }
}

.van-tab {
    color: #093038
}</style>