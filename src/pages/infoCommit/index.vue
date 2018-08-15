<template>
  <div class="vist-userInfo">
      <div class="commitSuc">
        <p> <i class="icon iconfont icon-chenggong"></i>提交成功！</p>
      </div>
    <div class="commitInfo">
      <div class="commitTitle">
        <p>  您定制的产品型号是  惠普战 99 G1移动工作站</p>
        <p> 具体参数如下：</p>
      </div>
      <div class="commitImg">
        <div class="img">
          <img src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
        </div>
        <div class="infos">
          <p>
            Intel Core i3-6100 3.7G 3M 2133
          </p>
          <p> 32G DDR4 2400 SODIMM</p>
          <p>2*1T(SATA 6G+1TB NVMe SSD)+1*512G(HP Turbo Drive G2 or NVMe SSD)</p>
          <p>英特尔® HD Graphics 核芯显卡</p>
          <p>Windows 10 家庭版 64</p>
          <p>铂金电源</p>
        </div>
      </div>
      <div class="configPrice">
        <p>
          总价<span>RMB 12,345</span>
        </p>
      </div>
    </div>
    <div class="homePage" @click="goHomePage()">
      回首页
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
      console.log(5555555)
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
      goHomePage(){
        wx.navigateBack({
          delta: 4
        })
      }
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
        i{
          display: inline-block;
          font-size: 24px;
          /*position: relative;*/
          /*top: 2px;*/
          margin-right: 10px;
        }
      }
    }
    .commitInfo{
      .commitTitle{
        margin-bottom: 30px;
        p{
          line-height: 20px;
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          text-align: left;
          font-family: Arial;
        }
      }
      .commitImg{
        width: 100%;
        height: 160px;
        margin-bottom: 43px;
        div{
          float: left;
        }
        .img{
          width: 160px;
          height: 160px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .infos{
          width: calc(100% - 165px);
          height: 100%;
          padding-left: 5px;
          p{
            line-height: 16px;
            color: rgba(87, 87, 87, 0.9);
            font-size: 11px;
            text-align: left;
            font-family: Arial;
          }
        }
      }
      .configPrice{
        width: 100%;
        p{
          height: 23px;
          line-height: 20px;
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          font-family: Arial;
          margin-left: 80px;
          span{
            display: inline-block;
            margin-left: 5px;
            color: rgba(0, 150, 214, 1);
          }

        }
      }
    }
    .homePage{
      width: 100%;
      height: 50px;
      line-height: 50px;
      position: fixed;
      left: 0px;
      bottom: 0px;
      background-color: rgba(0, 150, 214, 1);
      color: #fff;
      font-size: 16px;
      text-align: center;
      font-family: Arial;
      border: 1px solid rgba(0, 150, 214, 1);
      box-sizing: border-box;
    }
  }
</style>
