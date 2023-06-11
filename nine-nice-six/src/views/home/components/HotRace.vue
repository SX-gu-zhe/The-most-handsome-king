<template>
    <div class="hotRace">
        <van-nav-bar title="" left-text="IG牛逼" right-text="》" @click-right="$router.push('/tst')" />
        <van-grid :border="false" :column-num="2">
            <van-count-down :time="time" class="ddjjss">
                <template #default="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
            <van-grid-item>
                <video width="170" height="120" controls>
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg"> Your browser does not support the video tag.
                </video>
            </van-grid-item>
            <van-grid-item>
                <video width="170" height="120" controls>
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg"> Your browser does not support the video tag.
                </video>

            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const time = ref(19320000);

</script>

<style scoped lang="scss">
.hotRace {
    margin: 0.3125rem 0px;
    width: 100%;
}
.ddjjss{
    width: 90%;
    height: 30px;
  text-align: right;
  font-size: 1.25rem;
    
}
.colon {
    display: inline-block;
    margin: 0 4px;
    color: #1989fa;
    line-height: 40px;

  }
  .block {
    display: inline-block;
    width: 30px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #1989fa;
    border-radius: 20%;
    line-height: 20px;
    margin-right: 10px;
  }
</style>