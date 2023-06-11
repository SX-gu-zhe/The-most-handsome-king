<template>
    <div class="appTst">

        <van-tabs class="van-tabs-ttt" color="#17545ed8" type="card">
            <van-tab title="标签 1"><br />
                <van-search shape="round" background="#d1dcdf00" placeholder="搜索用户·关注·话题" @focus="TSearch" />
                <AppBanner />
                <br />
                
                <van-grid direction="horizontal" :column-num="3" class="tst-grid">
                    
                    <van-image class="van-image"
                        src="https://img2.baidu.com/it/u=2903465729,100465567&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                        <div class="huiTiao">2023年5月21日</div>
                    </van-image>
                    <van-image class="van-image"
                        src="https://img2.baidu.com/it/u=2903465729,100465567&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                        <div class="huiTiao">2023年5月21日</div>
                    </van-image>
                    <van-image class="van-image"
                        src="https://img2.baidu.com/it/u=2903465729,100465567&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500">
                        <div class="huiTiao">2023年5月21日</div>
                    </van-image>
                </van-grid>
                <br/>
                <van-nav-bar title="" left-text="热门话题" right-text="更多>" @click-right="$router.push('/tst')" />

                    <tstShop/>
            </van-tab>

            <van-tab title="标签 2">456</van-tab>
        </van-tabs>





        <!-- <div class="jj">
            <TstOne />
        </div> -->
    </div>
</template>

<script setup lang="ts">
import AppBanner from '../home/components/AppBanner.vue';
import TstOne from './components/tstOne.vue';
import tstShop from './components/tstShop.vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const $router = useRouter()
const $route = useRoute()

const TSearch = () => {
    $router.push('/tsearch')

}



</script>

<style scoped lang="scss"> .appTst {
     width: 100%;
     position: relative;
     height: 100%;

     .Htst {
         padding: 1.875rem 0;
     }

     >.van-tabs-ttt {
         padding-top: 20px;
         width: 25rem;
         height: 100%;
         background: linear-gradient(to top, #17545ed8, #114952e7, #154f58e7, #0f424b, #0d3138);

         .van-search {
             padding-top: 10px;
             background-color: #d1dcdf00;
         }

         .tst-grid {
              flex-wrap: nowrap;
            //  width: 100px;
             // overflow: hidden;
             .van-image{
                width: 100%;
                height: 100%;
             }
             .huiTiao {
                 width: 100%;
                 height: 1.225rem;
                 position: absolute;
                 bottom: 0;
                 background-color: rgba(0, 0, 0, 0.841);
                 color: bisque;

             }
         }


     }

 }</style>