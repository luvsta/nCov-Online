<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="小艾同学已经在努力爬取数据中了...">

    <!-- 实时数据 -->
    <div class="content">
      <!-- 更新时间 -->
      <div>
        <span class="update-time">更新时间：{{this.updateTime}}</span>
        <h2 class="update-title">今日疫情</h2>
      </div>

      <!-- 宣传模块 -->
      <div class="card card-top">
        <div class="banner">
          <div class="banner-bg" />
        </div>
      </div>

      <!-- 详情模块 -->
      <vue-details-card></vue-details-card>


      <!-- 谣言模块 -->
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


        <!--  -->
      </div>

    </div>

    <!-- 手动滚动 -->
    <!-- <div class="lateral-sliding">
        <div class="lateral-sliding-item" v-for="(item,index) in items" :key="index">
          <div class="each-img"></div>
        </div>
      </div> -->
    <button v-on:click.stop="async_action()">查看store数据</button>
  </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  const DetailsCard = () => import('./DetailsCard/index.vue')

  export default {
    components: {
      'vue-details-card': DetailsCard
    },
    data() {
      return {
        fullscreenLoading: false,
        // 分组数据
        rumors1: [],
        rumors2: [],
        rumors3: [],
      }
    },
    methods: {
      async_action: function () {
        console.log(this)
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
      openFullScreen1() {
        this.fullscreenLoading = true;
        clearInterval(watchPy);
        let watchPy = setInterval(() => {
          console.log("还在循环吗?")
          let { confirmedCount } = this;
          if (confirmedCount !== 0) {
            this.fullscreenLoading = false;
            this.$refs.firstRumor.setAttribute("class", "rumors-list rumors-animation-barrage");
            this.$refs.secondRumor.setAttribute("class", "rumors-list-center rumors-animation-centerage");
            this.$refs.thirdRumor.setAttribute("class", "rumors-list rumors-animation-barrage");
            clearInterval(watchPy);
          }
        }, 1000);
      }
    },
    created() {
      this.$store.dispatch("HomePage/get_all_data_action");
      this.$store.dispatch("HomePage/get_all_rumors_action");
      this.openFullScreen1();

      // 5分钟内部刷新一次数据
      setInterval(() => {
        this.$store.dispatch("HomePage/get_all_data_action");
        this.$store.dispatch("HomePage/get_all_rumors_action");
      }, 300000)
    },
    computed: {
      ...mapState('HomePage', ['updateTime']), // 数据更新时间
      ...mapState('HomePage', ['confirmedCount']), // 确诊人数
    },
    watch: {
      '$store.state.HomePage.rumors': function (newVal, oldVal) {
        this.renderRumors(newVal);
      }
    },
  };
</script>

<style>
  .content {
    padding: 0 1rem;
  }

  .update-time {
    color: #666666;
    font-size: .7rem;
    font-weight: bold;
  }

  .update-title {
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
  }

  .card {
    padding: .3rem .8rem;
    border-radius: 15px;
    box-shadow: 2px 5px 20px #ccc5c5;
    padding-bottom: 5px;
    transition-duration: 0ms;
    transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);
    z-index: 1;
    overflow: hidden;
    margin-bottom: 25px;

    /* 暂定 */
    /* height: 300px; */
  }

  .card-title {
    color: #989898;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .card-top {
    background-color: #fda540;
    background-color: #2f4af5;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }

  .card-center {
    background-color: #fff;
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



  /*  */
  .banner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 33.5%;
    color: #fff;
    font-weight: 500;
    /* font-size: .28rem; */
    /* text-align: center; */
    background-image: url('../../assets/banner-bg.png');
    background-repeat: no-repeat;
    background-size: cover;

  }

  .banner-bg {
    position: absolute;
    top: .095rem;
    right: 0;
    height: .24rem;
    padding: 0 .08rem 0 .12rem;
    color: #fff;
    font-size: .11rem;
    line-height: .24rem;
    background-color: rgba(19, 15, 133, .6);
    border-top-left-radius: .12rem;
    border-bottom-left-radius: .12rem;
  }


  .banner-content {
    display: flex;
    margin-bottom: 3px;
  }

  .banner-card {
    /* border: solid 1px #5864f7; */
    color: #fff;
    width: 50%;
    /* margin: 0.3rem; */
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 2px 5px 20px #ccc5c5;
    margin-bottom: 0.6rem;
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  }

  .banner-card:first-child {
    margin-right: 0.6rem;
  }

  .banner-card-count {
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.2rem;
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

  /* 无限滚动 */
  .lateral-sliding {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .lateral-sliding-item {
    display: flex;
    margin-right: 8px;
    background-color: yellow;
  }

  .each-img {
    width: 150px;
    height: 88px;
  }

  /* 竖屏 */
  @media (orientation:portrait) {}

  /* 横屏 */
  @media (orientation:landscape) {}

  /* 头尾的动画 */
  @-webkit-keyframes barrage {
    0% {
      -webkit-transform: translateX(0%);
    }

    50% {
      -webkit-transform: translateX(-75%)
    }

    0% {
      -webkit-transform: translateX(0%);
    }
  }

  /* 中间模块动画 */
  @-webkit-keyframes centerage {
    0% {
      -webkit-transform: translateX(-10%);
    }

    50% {
      -webkit-transform: translateX(-65%)
    }

    0% {
      -webkit-transform: translateX(-10%);
    }
  }
</style>