<template>
    <div class="homeInf">
        <van-grid class="van-grid" :border="false" :column-num="2" >
            <van-grid-item >
                <van-image class="van-image" src="https://img1.baidu.com/it/u=3441500831,2487662502&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500">
                    <div class="huiTiao">2023年5月21日</div>
                </van-image>
            <div>第一条</div>
            </van-grid-item>
            <van-grid-item>
                <van-image class="van-image" src="https://img2.baidu.com/it/u=2903465729,100465567&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" >
                <div class="huiTiao">2023年5月21日</div></van-image>
            <div>第二条</div>
            </van-grid-item>
            <van-grid-item>
                <van-image class="van-image" src="https://img2.baidu.com/it/u=1812661742,1630705493&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500" >
                <div class="huiTiao">2023年5月21日</div></van-image>
                <div>第三条</div>
            </van-grid-item>
            <van-grid-item>
                <van-image class="van-image" src="https://img0.baidu.com/it/u=2449026797,2609620233&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800">
                <div class="huiTiao">2023年5月21日</div></van-image>
                <div>第四条</div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.homeInf{
    width: 100%;
    height: 400px;
    padding-bottom:50px ;
     .van-grid{
        width: 100%;
        height: 100%;
        .van-image{
    width: 100%;
    height: 100%;
}
    }
}
.huiTiao{
    width: 100%;
    height: 1.225rem;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.841);
    color: bisque;
    
}

</style>