<template>
  <div class="vist-userInfo">
    <!--<web-view src="https://www.hejinkai.com/51talk"></web-view>-->
    <div :style="{'width':(getWindowWidth-40)+'px'}" class="container">
      <div class="logo" style="margin-top: 30px;">
        <img src="/static/images/logo.jpg" alt="">
        <p style="color: #000;font-size: 18px;">智慧营销</p>
        <p>分享足迹-更多人了解景点信息</p>
      </div>
      <p style="border-top:1px solid #ccc;width: 100%;margin: 60px 0 10px 0;"></p>
      <div class="info">
        <p>该程序将获得以下授权</p>
        <p><span class="dot">·</span><span>获得您的公开信息（头像、昵称等）</span></p>
        <p>(取消授权您可能错过很多功能哦～)</p>
      </div>
      <div class="btn">
        <div>
          <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" class="save-btn">立即授权</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import utils from "../../utils/utils.js";
  export default {
    data() {
      return {

      }
    },
    onLoad(option) {

    },
    components: {},
    computed: {
      getWindowWidth() {
        return this.$store.state.board.windowWidth
      }
    },
    methods: {
      bindGetUserInfo() {
        this.login(this);
      },
      backHomePage() {
        var path = this.currentPages + "?scenicSpotId=" + this.scenicSpotId;
        console.log(this.currentPages)
        console.log(path)
        wx.redirectTo({
          url: "/" + path
        })
      },
      login(){
        var that = this;
        utils.login(that);
      }

    },
    created() {

    }
    ,
    mounted() {
      wx.setNavigationBarTitle({
        title: "用户授权"
      })
    }
  }
</script>

<style lang="scss" scoped>
  .vist-userInfo {
    background-color: #fff;
    justify-content: initial;
    .container {
      margin: 0 auto;
      font-size: 14px;
      color: #ccc;
      .logo {
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }
        p {
          text-align: center;
        }
      }
      .info {
        width: 100%;
        font-size: 12px;
        p {
          margin-top: 10px;
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .dot {
            /*font-size: 12px;*/
            font-weight: bold;
            padding-right: 5px;
          }
        }
      }
      .btn {
        width: 100%;
        margin-top: 60px;
        div {
          width: 100%;
          display: inline-block;
          text-align: center;
          button {
            font-size: 14px;
            font-family: "Microsoft YaHei UI Light";
            border: 0;
            margin: 0 auto;
          }
          .save-btn {
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-top: 15px;
            border-radius: 3px;
            box-sizing: border-box;
            background-color: #e64340;
            color: #fff;
          }
          button[type="default"] {
            background-color: #f1f1f1;
            color: #000;
          }
        }
      }
    }
  }
</style>
