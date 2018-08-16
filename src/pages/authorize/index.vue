<template>
  <div class="authorizes-userInfo">
    <!--<web-view src="https://www.hejinkai.com/51talk"></web-view>-->
    <div class="authorizes">
      <div class="logo">
        <img src="/static/images/timg.jpg" alt="">
        <p style="color: #000;font-size: 18px;">惠普</p>
        <p>CTO 计算器</p>
      </div>
      <p style="border-top:1px solid #ccc;width: 100%;margin: 60px 0 0 0;"></p>
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
      login(){
        var that = this;
        utils.login(that,false);
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
  .authorizes-userInfo {
    padding: 40px;
    background-color: #fff;
    justify-content: initial;
    .authorizes {
      margin: 0 auto;
      font-size: 14px;
      color: #ccc;
      .logo {
        img {
          display: block;
          width: 70px;
          height: 70px;
          margin: 0 auto;
        }
        p {
          text-align: center;
          margin-top: 5px;
        }
      }
      .info {
        width: 100%;
        font-size: 12px;
        padding: 10px;
        box-sizing: border-box;
        p {
          line-height: 24px;
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
        width: 90%;
        margin: 0 auto;
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
            background-color:  #0096D6;
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
