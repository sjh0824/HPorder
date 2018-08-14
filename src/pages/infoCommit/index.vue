<template>
  <div class="vist-userInfo">
      <div class="commitSuc">
        <p>提交成功！</p>
      </div>
    <div class="commitInfo">
      <div class="commitTitle">
        <p>  您定制的产品型号是  惠普战 99 G1移动工作站</p>
        <p> 具体参数如下：</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },

    onLoad() {

    },
    onShareAppMessage(res) {
      var that = this;
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }

      var actId = that.$store.state.board.actId
      var helpId = that.$store.state.board.myHelpId
      var path = "/pages/activePower/main";

      if (actId && helpId) {
        path = path + "?actId=" + actId + "&helpId=" + helpId
      } else {

      }
      return {
        title: '分享活动',
        path: path,
        success: function () {

        }
      }

    },
    methods: {

    },
    async onPullDownRefresh() {
      // 停止下拉刷新
      wx.stopPullDownRefresh();
    },

    created() {
    },
    computed: {},
    mounted() {
      var that = this;

    }
  }
</script>

<style lang="scss" scoped>
  .vist-userInfo {
    font-size: 22px;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .commitSuc{
      margin-top: 26px;
      margin-bottom: 25px;
      p{
        line-height: 29px;
        color: rgba(0, 150, 214, 1);
        font-size: 20px;
        text-align: center;
        font-family: Arial;
      }
    }
    .commitInfo{
      .commitTitle{
        p{
          line-height: 20px;
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          text-align: left;
          font-family: Arial;
        }
      }
    }
  }
</style>
