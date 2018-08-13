/**
 * Created by liruimin1 on 2018/5/14.
 */
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
      "enablePullDownRefresh": false,
      "disableScroll":true
    }
  }
