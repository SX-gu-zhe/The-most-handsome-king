<template>
    <div class="layout">
      <div class="appTop"></div>

      <div class="appMain"> <RouterView/></div>

      <AppFooterVue/>
    </div>
</template>

<script setup lang="ts">
import  AppFooterVue from './components/AppFooter.vue';


</script>

<style scoped lang="scss">
.layout{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .appTop{
        display: flex;
        width: 100%;
        // height: 3.125rem;
        // background-color: yellow;
    }
    .appMain{
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        // overflow-x : hidden;
    }
    .appFooter{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 3.125rem;
    }
}
</style>