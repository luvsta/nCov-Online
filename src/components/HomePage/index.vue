<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="小艾同学已经在努力爬取数据中了...">

    <div class="content">

      <!-- 更新时间 -->
      <vue-update-time></vue-update-time>

      <!-- 宣传模块 -->
      <vue-banner-card></vue-banner-card>

      <!-- 详情模块 -->
      <vue-details-card></vue-details-card>

      <!-- 谣言模块 -->
      <vue-rumors-card ref="rumors"></vue-rumors-card>

      <!-- <vue-details-card style="position:relative;z-index:222;"></vue-details-card> -->

    </div>

    <!-- 手动滚动 -->
    <!-- <div class="lateral-sliding">
        <div class="lateral-sliding-item" v-for="(item,index) in items" :key="index">
          <div class="each-img"></div>
        </div>
      </div> -->

    <button v-on:click.stop="async_action()" ref="haha">查看store数据</button>
  </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  const UpdateTime = () => import('./UpdateTime/index.vue');
  const BannerCard = () => import('./BannerCard/index.vue');
  const DetailsCard = () => import('./DetailsCard/index.vue');
  const RumorsCard = () => import('./RumorsCard/index.vue');

  export default {
    components: {
      'vue-update-time': UpdateTime,
      'vue-banner-card': BannerCard,
      'vue-details-card': DetailsCard,
      'vue-rumors-card': RumorsCard
    },
    data() {
      return {
        fullscreenLoading: false,
      }
    },
    methods: {
      async_action: function () {
        // console.log(this.$refs.haha.scrollTop);
      },
      openFullScreen1() {
        this.fullscreenLoading = true;
        clearInterval(watchPy);
        let watchPy = setInterval(() => {
          console.log("还在循环吗?")
          let { confirmedCount } = this;
          if (confirmedCount !== 0) {
            clearInterval(watchPy);
            this.fullscreenLoading = false;
            this.$refs.rumors.$refs.firstRumor.setAttribute("class", "rumors-list rumors-animation-barrage");
            this.$refs.rumors.$refs.secondRumor.setAttribute("class", "rumors-list-center rumors-animation-centerage");
            this.$refs.rumors.$refs.thirdRumor.setAttribute("class", "rumors-list rumors-animation-barrage");
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
      ...mapState('HomePage', ['confirmedCount']), // 确诊人数
    },
  };
</script>

<style>
  .content {
    padding: 0 1rem;
  }

  .card {
    padding: .3rem .8rem;
    border-radius: 15px;
    box-shadow: 2px 5px 20px #ccc5c5;
    padding-bottom: 5px;
    z-index: 1;
    overflow: hidden;
    margin-bottom: 25px;
  }

  .banner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 33.5%;
    color: #fff;
    font-weight: 500;
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
</style>