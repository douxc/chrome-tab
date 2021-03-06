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
    render (h) {
        return <App></App>;
    }
});