<template>
    <!-- 详情模块 -->
    <div style="margin-bottom: 22px;">
        <div class="banner-content">
            <div class="banner-card">
                <div class="banner-card-flex">
                    <i class="el-icon-warning" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count">{{this.confirmedCount}}</span>
                        <span class="banner-card-count-title">确诊</span>
                    </div>
                </div>

                <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.confirmedIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div>
            </div>

            <div class="banner-card" style="background-image: linear-gradient(-90deg, #f09819 0%, #ff5858 100%)">
                <div class="banner-card-flex">
                    <i class="el-icon-question" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count" style="flex:1">{{this.suspectedCount}}</span>
                        <span class="banner-card-count-title">疑似</span>
                    </div>
                </div>
                <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.suspectedIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div>
            </div>
        </div>

        <div class="banner-content">
            <div class="banner-card" style="background-image: linear-gradient(to right, #344346 0%, #1dbfd9 100%);">
                <div class="banner-card-flex">
                    <i class="el-icon-error" style="font-size: 1.2rem;flex:1;"></i>
                    <div>
                        <span class="banner-card-count">{{this.deadCount}}</span>
                        <span class="banner-card-count-title">死亡</span>
                    </div>
                </div>

                <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.deadIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div>
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
                <div class="banner-card-flex">
                    <span class="banner-card-incr">+{{this.curedIncr}}</span>
                    <span class="banner-card-incr">较昨日</span>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('HomePage', ['confirmedCount']), // 确诊人数
            ...mapState('HomePage', ['suspectedCount']), // 疑似人数
            ...mapState('HomePage', ['deadCount']), // 死亡人数
            ...mapState('HomePage', ['curedCount']), // 治愈人数
            ...mapState('HomePage', ['confirmedIncr']), // 确诊增加人数
            ...mapState('HomePage', ['suspectedIncr']), // 疑似增加人数
            ...mapState('HomePage', ['deadIncr']), // 死亡增加人数
            ...mapState('HomePage', ['curedIncr']), // 治愈增加人数
        }
    }

</script>