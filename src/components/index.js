/**
 * 入口
 * Created by xinchao.dou on 2017/5/2.
 */
import '../styles/newTab.css';
import Vue from 'vue';
import axios from 'axios';
import store from '../store';
import App from './Home';
Object.defineProperty(Vue.prototype, '$axios', {value: axios});
Vue.config.devtools = true;
new Vue({
    el: '#app',
    store,
    render: function (h) {
        return <App></App>;
    },
    mounted() {
        const _this = this;
        const state = window.localStorage.getItem('state');
        if (state && state.length > 0) {
            _this.$store.replaceState(JSON.parse(state));
        }
    }
});