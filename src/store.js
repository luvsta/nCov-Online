import Vue from 'vue' // 引入 vue
import Vuex from 'vuex' // 引入vuex


import HomePage from '@/components/HomePage/model.js'

// 使用Vuex
Vue.use(Vuex);


// 创建并导出Vuex实例
export default new Vuex.Store({
    strict: true,
    devtools: true,
    plugins: [],
    modules: {
        HomePage
    }
});
