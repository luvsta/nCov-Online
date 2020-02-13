<template>
    <!-- 详情模块 -->
    <div style="margin-bottom: 22px;">
        <div class="banner-content">
            <div class="banner-card">
                <div class="banner-card-flex">
                    <i class="el-icon-warning" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count">{{this.currentConfirmedCount}}</span>
                        <span class="banner-card-count-title">确诊</span>
                    </div>
                </div>

                <!-- <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.confirmedIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div> -->
            </div>

            <div class="banner-card" style="background-image: linear-gradient(-90deg, #f09819 0%, #ff5858 100%)">
                <div class="banner-card-flex">
                    <i class="el-icon-question" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count" style="flex:1">{{this.suspectedCount}}</span>
                        <span class="banner-card-count-title">疑似</span>
                    </div>
                </div>
                <!-- <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.suspectedIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div> -->
            </div>

            <div class="banner-card">
                <div class="banner-card-flex">
                    <i class="el-icon-info" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count">{{this.seriousCount}}</span>
                        <span class="banner-card-count-title">重症</span>
                    </div>
                </div>

            </div>
        </div>

        <div class="banner-content">

            <div class="banner-card" style="background-image: linear-gradient(to right, #344346 0%, #1dbfd9 100%);">
                <div class="banner-card-flex">
                    <i class="el-icon-circle-plus" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count">{{this.confirmedCount}}</span>
                        <span class="banner-card-count-title">累计</span>
                    </div>
                </div>

                <!-- <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.deadIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div> -->
            </div>

            <div class="banner-card" style="background-image: linear-gradient(to right, #344346 0%, #1dbfd9 100%);">
                <div class="banner-card-flex">
                    <i class="el-icon-error" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count">{{this.deadCount}}</span>
                        <span class="banner-card-count-title">死亡</span>
                    </div>
                </div>

                <!-- <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.deadIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div> -->
            </div>

            <div class="banner-card"
                style="background-image: linear-gradient(-20deg, rgb(12, 193, 164) 0%, rgb(52, 176, 220) 100%)">
                <div class="banner-card-flex">
                    <i class="el-icon-success" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count" style="flex:1">{{this.curedCount}}</span>
                        <span class="banner-card-count-title">治愈</span>
                    </div>
                </div>
                <!-- <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.curedIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div> -->
            </div>
        </div>

    </div>

</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('HomePage', ['currentConfirmedCount']), // 确诊人数
            ...mapState('HomePage', ['suspectedCount']), // 疑似人数
            ...mapState('HomePage', ['deadCount']), // 死亡人数
            ...mapState('HomePage', ['curedCount']), // 治愈人数
            ...mapState('HomePage', ['seriousCount']), // 重症人数
            ...mapState('HomePage', ['confirmedCount']), // 累计确证

            // ...mapState('HomePage', ['confirmedIncr']), // 确诊增加人数
            // ...mapState('HomePage', ['suspectedIncr']), // 疑似增加人数
            // ...mapState('HomePage', ['deadIncr']), // 死亡增加人数
            // ...mapState('HomePage', ['curedIncr']), // 治愈增加人数
        }
    }

</script>

<style>
    .banner-content {
        display: flex;
        margin-bottom: 3px;
    }

    .banner-card {
        color: #fff;
        width: 33.3%;
        padding: 0.5rem 0.25rem;
        border-radius: 8px;
        box-shadow: 2px 5px 20px #ccc5c5;
        margin-bottom: 0.4rem;
        margin-right: 0.4rem;
        background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    }

    .banner-card:last-child {
        margin-right: 0rem;
    }

    .banner-card-count {
        /* letter-spacing: 1px; */
        font-weight: bold;
        /* font-size: 1.2rem; */
    }

    .banner-card-count-title {
        font-size: 0.9rem;
    }

    .banner-card-flex {
        display: flex;
        justify-content: flex-end;
        align-items: center
    }

    .banner-card-incr {
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: 0;
        margin-top: 5px;
        margin-left: 10px;
    }
</style>