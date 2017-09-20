import './styles/styles.css';
import 'element-ui/lib/theme-default/index.css';
import Vue from 'vue';
import ElementUI from 'element-ui'; // 饿了么开源组件
import VueImage from '@douxc/vue-image';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueImage);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
