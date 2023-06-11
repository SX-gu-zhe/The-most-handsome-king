<template>
    <van-tabbar class="appFooter" v-model="active" active-color="#00ff00" route>
        <van-tabbar-item v-for="menu in menus" :key="menu.name" :name="menu.name" :icon="menu.icon" :title="menu.title" :to="menu.name">
        {{ menu.title }}
        </van-tabbar-item>
      
    </van-tabbar>
</template>

<script setup lang="ts">
import {reactive , ref} from 'vue';
const active = ref(0)

interface IMenuItem{
    name:string,
    icon:string,
    title:string,
}
const menus:IMenuItem[] = reactive([
    {name:'home' ,icon :'wap-home-o',title:'首页'},
    {name:'channel' ,icon :'point-gift-o',title:'频道'},
    {name:'tst' ,icon :'smile-comment-o',title:'话题'},
    {name:'discover' ,icon :'diamond-o',title:'发现'},
    {name:'pc' ,icon :'friends-o',title:'个人中心'},
])
</script>

<style scoped lang="scss"></style>