<template>
    <div class="card-center-before" style="margin-top:0px" v-on:click.stop="expendCard()" ref="cardCenter">
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
    import { getOsInfo, slideTo, judgeOS } from '@/tools/smart.js'
    export default {
        data() {
            return {
                // 分组数据
                rumors1: [],
                rumors2: [],
                rumors3: [],
                '@touchmove.prevent': true,
            }
        },
        methods: {
            doW(record) {
                console.log(record)
            },
            // 展开卡片
            expendCard: function () {
                // this.$refs.cardCenter.setAttribute(`${'@touchmove.prevent.stop'}`, null);

                // if (!judgeOS()) {
                let incrHeight = parseInt(this.$refs.cardCenter.offsetTop);
                let nowHeight = parseInt(this.$refs.cardCenter.style.marginTop);
                let totalHeight = nowHeight - incrHeight;
                // console.log("距离顶部:", incrHeight)
                // console.log("目前高度:", nowHeight)
                // console.log("total:", totalHeight);

                // 过渡动画
                slideTo(0)
                // 复原div
                if (incrHeight === 0) {
                    this.$refs.cardCenter.style.marginTop = '-' + incrHeight + 'px';
                    this.$refs.cardCenter.style.marginBottom = 25 - incrHeight + 'px';
                    this.$refs.cardCenter.setAttribute('class', 'card-center-before');
                } else {
                    this.$refs.cardCenter.style.marginTop = totalHeight + 'px';
                    this.$refs.cardCenter.style.marginBottom = 25 + incrHeight + 'px';
                    this.$refs.cardCenter.setAttribute('class', 'card-center-after');
                }
                // } 
            },
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

    /* expend的效果 前后 */
    .card-center-before-margin {
        height: auto;
    }

    .card-center-before {
        position: relative;
        padding: .3rem .8rem;
        border-radius: 15px;
        box-shadow: 2px 5px 20px #ccc5c5;
        overflow: hidden;
        height: auto;
        padding-bottom: 5px;
        z-index: 222;
        margin-bottom: 25px;
        background-color: #fff;
    }

    .card-center-after {
        overflow-y: hidden;
        position: relative;
        padding: .3rem .8rem;
        border-radius: 0px;
        box-shadow: 2px 5px 20px #ccc5c5;
        overflow: hidden;
        height: 100vh;
        margin-left: -1.2rem;
        margin-right: -1.2rem;
        z-index: 222;
        background-color: #ffffff;
        touch-action: none;
        overflow: hidden;
        /* transform: matrix(1, 0, 0, 1, 0, -300); */
    }
</style>