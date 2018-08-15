<template>
  <div class="vist-userInfo">
    <div class="configTitle">
      <p>标准配置（双核i3、16G DDR4、1T、集显）</p>
    </div>
    <scroll-view scroll-y>
      <div>
        <p class="singleName">CPU</p>
        <div :class="{ cpuBorder: cpuNum==0}" @click="cpuChange('0')">
            <span>Intel Core i3-6100 3.7G 3M 2133</span>
        </div>
        <div :class="{ cpuBorder: cpuNum==1}"  @click="cpuChange('1')">
          <span>New Core i5-8500(3.0G/9M/6核)</span><span class="priceDiff">+ RMB 480</span>
        </div>
        <div :class="{ cpuBorder: cpuNum==2}"  @click="cpuChange('2')">
          <span>New Core i7-8700(3.2G/12M/6核)</span><span class="priceDiff">+ RMB 780</span>
        </div>
      </div>
      <div>
        <p class="singleName">DDR Memory</p>
        <div :class="{ cpuBorder: ddrNum==1}" @click="ddrChange('1')">
          <span>8G (4G*2) DDR4 2133</span><span class="priceDiff">- RMB 320</span>
        </div>
        <div :class="{ cpuBorder: ddrNum==0}"  @click="ddrChange('0')">
          <span>8G (8G*1) DDR4 2133</span>
        </div>
        <div :class="{ cpuBorder: ddrNum==2}"  @click="ddrChange('2')">
          <span>16G (16G*1)DDR4 2133</span><span class="priceDiff">+ RMB 970</span>
        </div>
      </div>
      <div>
        <p class="singleName">HDD</p>
        <div :class="{ cpuBorder: hddNum==0}" @click="hddChange('0')">
          <span>1T 7200(3.5")</span>
        </div>
        <div :class="{ cpuBorder: hddNum==1}"  @click="hddChange('1')">
          <span>SSD 256G M.2 PCIe NVMe</span><span class="priceDiff">+ RMB 450</span>
        </div>
        <div :class="{ cpuBorder: hddNum==2}"  @click="hddChange('2')">
          <span>SSD 512G PCIe NVMe</span><span class="priceDiff">+ RMB 780</span>
        </div>
      </div>
      <div>
        <p class="singleName">电源</p>
        <div :class="{ cpuBorder: powerNum==0}" @click="powerChange('0')">
          <span>Stander Power</span>
        </div>
        <div :class="{ cpuBorder: powerNum==1}"  @click="powerChange('1')">
          <span>High Efficient Power</span><span class="priceDiff">+ RMB 100</span>
        </div>
        <div :class="{ cpuBorder: powerNum==2}"  @click="powerChange('2')">
          <span>250W 珀金电源</span><span class="priceDiff">+ RMB 160</span>
        </div>
      </div>
      <div>
        <p class="singleName">OS</p>
        <div :class="{ cpuBorder: osNum==0}" @click="osChange('0')">
          <span>Windows 10 64位</span>
        </div>
        <div :class="{ cpuBorder: osNum==1}"  @click="osChange('1')">
          <span>Windows 7 Pro 32位(中文版)</span><span class="priceDiff">+ RMB 900</span>
        </div>
        <div :class="{ cpuBorder: osNum==2}"  @click="osChange('2')">
          <span>Windows 10 Pro 64位(中文版)</span><span class="priceDiff">+ RMB 900</span>
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
        cpuNum:0,
        ddrNum:0,
        hddNum:0,
        powerNum:0,
        osNum:0
      }
    },

    onLoad() {
      console.log(4444444)
      this.cpuNum = 0;
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
      ddrChange(index){
        this.ddrNum = index
      },
      hddChange(index){
        this.hddNum = index
      },
      powerChange(index){
        this.powerNum = index
      },
      osChange(index){
        this.osNum = index
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
      height: calc(100% - 95px);
      padding: 10px 20px;
      padding-bottom: 0px;
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
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 10px;
          box-sizing:border-box;
          span{
            display: inline-block;
            color: rgba(16, 16, 16, 1);
            font-size: 12px;
            font-family: Arial;
            margin-left: 10px;
            line-height: 50px;
            float: left;
          }
          span.priceDiff{
            float: right;
            margin-right: 10px;
          }
        }
        div.cpuBorder{
          border: 2px solid #0096D9;
          span{
            line-height: 48px;
          }
        }
      }
    }
    .priceCommit{
      width: 100%;
      height: 50px;
      position: fixed;
      left: 0px;
      bottom: -2px;
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
