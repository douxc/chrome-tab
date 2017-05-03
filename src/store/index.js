/**
 * Created by xinchao.dou on 2017/5/3.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import popWebsites from './popWebsites'; // 常用的网址
import HistoryList from './historyList'; // 浏览历史
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        ...popWebsites.state,
        ...HistoryList.state
    },
    actions: {
        ...popWebsites.actions,
        ...HistoryList.actions
    },
    getters: {
        ...popWebsites.getters,
        ...HistoryList.getters
    },
    mutations: {
        ...popWebsites.mutations,
        ...HistoryList.mutations
    }
});
export default store;