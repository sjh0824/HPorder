<script>
  import utils from "./utils/utils.js";
  export default {
    onLaunch(option) {
    },
    onShow(option) {
      var that = this;
      console.log(option)
      this.$store.state.board.actId= '6';
      // wx.getSetting({
      //   success: (res) => {
      //     if (!res.authSetting['scope.userInfo']) {
      //       wx.redirectTo({
      //         url: '/pages/authorize/main'
      //       })
      //     } else {
      //
      //     }
      //   }
      // })

    },
    created() {

    }
  }
</script>

<style>
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
