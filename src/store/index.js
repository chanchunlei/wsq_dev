import Vue from 'vue'
import Vuex from 'vuex'

// 自定义 配置页面
import ToolsPage from '@/store/modules/ToolsPage'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 记录 当前页面 路由
        navActive: '',
    },
    getters: {
        get_navActive(state){
            return state.navActive;
        },
    },
    mutations: {
        set_navActive(state, data){
            state.navActive = data.navActive;
        },
    },
    actions: {},
    // 状态 模块管理
    modules: {
        ToolsPage
    }
})
