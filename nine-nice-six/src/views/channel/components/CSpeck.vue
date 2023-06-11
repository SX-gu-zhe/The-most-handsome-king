<template>
    <div>

        <van-sidebar v-model="falseData.name" @change="onChange" class="CSsidebar">
            <van-sidebar-item title="小 红"> 
                <smallRedVue/> 
            </van-sidebar-item>
            <van-sidebar-item title="小 绿"></van-sidebar-item>
            <van-sidebar-item title="小 兰"></van-sidebar-item>
            <van-sidebar-item title="梦 泪"></van-sidebar-item>
            <van-sidebar-item title="久 城"></van-sidebar-item>
            <van-sidebar-item title="六 点 六"></van-sidebar-item>
        </van-sidebar>

        <!-- <div role="dialog" tabindex="0" class="van-popup van-popup--center 
        van-toast van-toast--middle van-toast--text"
            style="z-index: 2011; display: block;">
            <div class="van-toast__text">标签名 3</div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { ref  } from 'vue';
import { showToast } from 'vant';
import  smallRedVue from './smallRed/smallRed.vue';
import { identity } from 'lodash';

const active = ref(0);
const onChange = (index) => showToast(`哇咔咔 ${index + 1}`);

const falseData = ref<any>([
    { id: 1, name: '梦泪', },
    { id: 2, name: '九成', },
    { id: 3, name: '六点六', },
    { id: 4, name: 'PDD', },
    { id: 5, name: 'UZI', },
])
interface falseDa {
id: number,
name: string,
}

</script>

<style scoped lang="scss">
.CSsidebar {
    width: 40%;
    position: relative;

    .van-popup  {
        position: absolute;
        top: 0;
        color: wheat;
        display: block;
    }
}</style>