// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.use(require('vue-wechat-title'));
import 'mint-ui/lib/style.css';
import Mint from 'mint-ui';
Vue.use(Mint);
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import WX from './commen/js/wx_config.js';
import Velocity from 'velocity-animate';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
})
