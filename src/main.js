import Vue from "vue";
import store from "./store";
import App from "./App";
import './iconfont/iconfont.css';

// import 'mp-weui/lib/style.css'
var Fly = require("flyio/dist/npm/wx");


var fly = new Fly();

Vue.prototype.$ajax = fly; //将fly实例挂在vue原型上
Vue.prototype.$store = store;

Vue.config.productionTip = false;
App.mpType = "app";


const app = new Vue({
  store,
  ...App
});
app.$mount();



export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ["pages/logs/main",  "pages/authorize/main",  "pages/instrustor/main",  "^pages/activePower/main",  "pages/showPages/main",],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#000",
      navigationBarTitleText: "",
      navigationBarTextStyle: "white"
    }
  }
};
