<template>
  <div class="vist-userInfo">
    <div class="proDescribe">
      <div class="productImg">
        <img src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
      </div>
      <div class="productInfo">
        <span>定制你的G1移动工作站</span>
        <p>
          Intel Core i3-6100 3.7G 3M 2133
        </p>
        <p> 32G DDR4 2400 SODIMM</p>
        <p>2*1T(SATA 6G+1TB NVMe SSD)+1*512G(HP Turbo Drive G2 or NVMe SSD)</p>
        <p>英特尔® HD Graphics 核芯显卡</p>
        <p>Windows 10 家庭版 64</p>
      </div>
    </div>
    <hr class="lines">
    <div class="configInfo">
        <div class="infoTitle">
          推荐配置
        </div>
      <scroll-view scroll-y>
        <div :class="{ borderLines: currentNum==0}" @click="configDetail('0')">
          标准配置（双核i3、16G DDR4、1T、集显）
        </div>
        <div :class="{ borderLines: currentNum==1}"  @click="configDetail('1')">
          最受欢迎（四核i5、32G DDR4、500G、集显）
        </div>
        <div :class="{ borderLines: currentNum==2}"  @click="configDetail('2')">
          日常办公（双核 i5、16G DDR4、500G、集显）
        </div>
        <div :class="{ borderLines: currentNum==3}"  @click="configDetail('3')">
          编程首选（四核 i7、32G DDR4、1T、集显）
        </div>
        <div :class="{ borderLines: currentNum==4}"  @click="configDetail('4')">
          绘图必备（四核 i7、32G DDR4、2T、独显）
        </div>
        <div :class="{ borderLines: currentNum==5}"  @click="configDetail('5')">
          最受欢迎（四核i5、32G DDR4、500G、集显）
        </div>
        <div :class="{ borderLines: currentNum==6}"  @click="configDetail('6')">
          最受欢迎（四核i5、32G DDR4、500G、集显）
        </div>
        <div :class="{ borderLines: currentNum==7}"  @click="configDetail('7')">
          最受欢迎（四核i5、32G DDR4、500G、集显）
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        currentNum:0
      }
    },

    onLoad() {
      this.currentNum = 0;
      console.log(333333)
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
      configDetail(index){
        this.currentNum = index;

        wx.navigateTo({
          url: '../configDetail/main?id='+index
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
    box-sizing:border-box;
    padding: 10px;
    .proDescribe {
      width: 100%;
      height: 160px;
      padding-bottom: 10px;
      font-family: Arial;
      div {
        float: left;
      }
      .productImg {
        width: 140px;
        height: 160px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .productInfo {
        width: calc(100% - 160px);
        padding-left: 20px;
        span {
          display: block;
          font-size: 16px;
          color: #4A4A4A;
          line-height: 30px;
        }
        p {
          font-size: 11px;
          color: rgba(87, 87, 87, 0.9);
          line-height: 18px;
        }

      }
    }
    .lines{
      width: 100%;
      height: 1px;
      background-color: #ccc;
      margin: 10px 0px;
    }
    .configInfo{
      width: 100%;
      height: calc(100% - 193px);
      background-color: #F8F8F8;
      line-height: 20px;
      border-radius: 3px;
      text-align: center;
      border: 1px solid rgba(204, 204, 204, 1);
      box-sizing:border-box;
      .infoTitle{
        line-height: 17px;
        color: rgba(45, 45, 45, 1);
        font-size: 12px;
        text-align: left;
        font-family: Arial;
        margin: 10px;
      }
      scroll-view{
        width: 100%;
        height: calc(100% - 37px);
        box-sizing:border-box;
        padding: 0px 10px;
        div{
          width: 100%;
          height: 50px;
          line-height: 50px;
          border-radius: 3px;
          box-sizing:border-box;
          border: 1px solid rgba(204, 204, 204, 1);
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          text-align: left;
          padding-left: 15px;
          font-family: Arial;
          background-color: #fff;
          margin-bottom: 10px;
        }
        .borderLines{
          border: 1px solid #0096D6;
        }
      }
    }
  }
</style>
