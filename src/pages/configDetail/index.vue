<template>
  <div class="vist-userInfo">
    <div class="configTitle">
      <p>标准配置（双核i3、16G DDR4、1T、集显）</p>
    </div>
    <scroll-view scroll-y>
      <div>
        <p class="singleName">CPU</p>
        <div :class="{ cpuBorder: cpuNum==0}" @click="cpuChange('0')">
            <p>Intel Core i3-6100 3.7G 3M 2133</p>
        </div>
        <div :class="{ cpuBorder: cpuNum==1}"  @click="cpuChange('1')">
          <p>New Core i5-8500(3.0G/9M/6核)</p>
        </div>
      </div>

    </scroll-view>

    <div class="priceCommit">
      <div class="calPrice">RMB  12,345</div>
      <div class="commit" @click="infoCommit()">提交</div>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        cpuNum:0
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
      cpuChange(index){
        this.cpuNum = index
      },
      infoCommit(){
        wx.navigateTo({
          url: '../infoCommit/main?id='
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
    .configTitle{
      width: calc(100% - 2px);
      height: 35px;
      line-height: 35px;
      background-color: #F8F8F8;
      text-align: left;
      border: 1px solid rgba(255, 255, 255, 0);
      p{
        color: #101010;
        font-size: 14px;
        margin-left: 10px;
        font-family: Arial;
      }

    }
    scroll-view{
      width: calc(100% - 40px);
      height: calc(100% - 105px);
      padding: 10px 20px;
      div{
        font-weight: normal;
        .singleName{
          height: 23px;
          line-height: 20px;
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          text-align: left;
          font-family: Arial;
          margin-bottom: 7px;
        }
        div{
          width: 100%;
          height: 50px;
          line-height: 48px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 10px;
          box-sizing:border-box;
          p{
            color: rgba(16, 16, 16, 1);
            font-size: 12px;
            text-align: left;
            font-family: Arial;
            margin-left: 10px;

          }
        }
        .cpuBorder{
          line-height: 46px;
          border: 2px solid #0096D9;
        }
      }
    }
    .priceCommit{
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      div{
        float: left;
      }
      .calPrice{
        width: 40%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        border: 1px solid rgba(0, 150, 217, 1);
        box-sizing: border-box;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        font-family: Arial;
      }
      .commit{
        width: 60%;
        height: 48px;
        line-height: 48px;
        box-sizing: border-box;
        background-color: rgba(0, 150, 214, 1);
        color: #fff;
        font-size: 16px;
        text-align: center;
        font-family: Arial;
        border: 1px solid rgba(0, 150, 214, 1);
      }
    }
  }
</style>
