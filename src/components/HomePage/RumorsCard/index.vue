<template>
    <div class="card card-center">
        <span class="card-title">辟谣播报</span>

        <h2 class="update-title">努力辟谣 维护良好网络环境</h2>

        <!--  -->

        <div class="rumors-list" ref="firstRumor">

            <div class="rumors" v-for="(item,index) in rumors1">
                <div>
                    <img src="@/assets/rumor.jpeg" />
                </div>
                <div class="rumors-card">
                    谣言！
                    <div class="rumors-title">{{item.title}}</div>
                </div>
            </div>

        </div>

        <div class="rumors-list-center" ref="secondRumor">

            <div class="rumors" v-for="(item,index) in rumors2">
                <div>
                    <img src="@/assets/rumor.jpeg" />
                </div>
                <div class="rumors-card">
                    谣言！
                    <div class="rumors-title">{{item.title}}</div>
                </div>
            </div>

        </div>

        <div class="rumors-list" ref="thirdRumor">

            <div class="rumors" v-for="(item,index) in rumors3">
                <div>
                    <img src="@/assets/rumor.jpeg" />
                </div>
                <div class="rumors-card">
                    谣言！
                    <div class="rumors-title">{{item.title}}</div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                // 分组数据
                rumors1: [],
                rumors2: [],
                rumors3: [],
            }
        },
        methods: {
            // 动态生成辟谣弹幕
            renderRumors: function (record) {
                if (record.length !== 0) {
                    record.map((item, index) => {
                        if (index < 4) {
                            this.rumors1.push(item)
                        } else if (4 <= index && index <= 6) {
                            this.rumors2.push(item)
                        } else if (index > 6) {
                            this.rumors3.push(item)
                        }
                    })
                }
            },
        },
        watch: {
            '$store.state.HomePage.rumors': function (newVal, oldVal) {
                this.renderRumors(newVal);
            }
        },
    }

</script>

<style>
    .card-center {
        background-color: #fff;
    }

    .card-title {
        color: #989898;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .rumors-list {
        display: flex;
        width: fit-content;
        margin-bottom: 15px;

    }

    .rumors-list-center {
        display: flex;
        width: fit-content;
        margin-bottom: 15px;
        -webkit-transform: translateX(-10%);
    }

    /* rumors动画 */
    .rumors-animation-barrage {
        -webkit-animation: barrage 100s linear infinite;
        /* -webkit-animation-delay: 1s; */
    }

    .rumors-animation-centerage {
        -webkit-animation: centerage 100s linear infinite;
        /* -webkit-animation-delay: 1s; */
    }

    .rumors {
        height: 58px;
        display: flex;
        margin-right: 10px;
        color: #666;
        border: 1px solid #ccced4;
        border-radius: 10px;
    }

    .rumors img {
        width: 70px;
        height: 58px;
        margin-right: 10px;
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
    }

    .rumors-card {
        width: max-content;
        padding-top: 5px;
    }

    .rumors-title {
        font-size: 0.8rem;
        margin-top: 0.3rem;
        color: #3a36fb
    }
</style>