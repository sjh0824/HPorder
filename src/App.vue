<script>
  import utils from "./utils/utils.js";
  export default {
    onLaunch(option) {
    },
    onShow(option) {
      var that = this;
      console.log(option)
      that.$store.state.board.authorizeFlag = '';
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            that.$store.state.board.authorizeFlag = true;
            utils.login(that)
          }
          else {
            that.$store.state.board.authorizeFlag = false;
          }
        }
      })
    },
    created() {

    }
  }
</script>

<style>
  @import "./iconfont/iconfont.css";
  page {
    height: 100%;
    width: 100%;
  }

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
