import App from './App'
import Vue from 'vue'

import kt from './uni_modules/uniapp-kantboot/index.js';
import uView from '@/uni_modules/uview-ui'

Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'
Vue.prototype.$kt = kt;
Vue.config.productionTip = false



App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount();
