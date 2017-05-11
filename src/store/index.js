/**
 * Created by xinchao.dou on 2017/5/3.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import popWebsites from './popWebsites'; // 常用的网址
import HistoryList from './historyList'; // 浏览历史
import AppList from './appList'; // 应用列表
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        ...popWebsites.state,
        ...HistoryList.state,
        ...AppList.state
    },
    actions: {
        ...popWebsites.actions,
        ...HistoryList.actions,
        ...AppList.actions
    },
    getters: {
        ...popWebsites.getters,
        ...HistoryList.getters,
        ...AppList.getters
    },
    mutations: {
        ...popWebsites.mutations,
        ...HistoryList.mutations,
        ...AppList.mutations
    }
});
export default store;