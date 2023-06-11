<template>
    <div class="homeRecommend">
<AppBanner/>
<HotRace/>
<AppInformationVue/>
    </div>
</template>

<script setup lang="ts">
import AppBanner from '../components/AppBanner.vue';
import  AppInformationVue from '../components/AppInformation.vue';
import HotRace from '../components/HotRace.vue';


</script>

<style scoped lang="scss">
.homeRecommend{
    width: 100%;
    height: 100%;
}
</style>