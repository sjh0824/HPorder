<template>
  <div class="vist-userInfo">
    <div class="configTitle">
      <p>{{computerInfo}}</p>
    </div>
    <scroll-view scroll-y>
      <div v-for="(item,index) in proDetail" :key="index">
        <p class="singleName">{{item.catg.catgName}}</p>
        <div v-if="item.parts.length>0" v-for="(items,ind) in item.parts" :key="ind" :class="{ cpuBorder: standardNum==items.standard, cpuBorder: dataIndex[index].num==items.partsId}" @click="detailChange(index,items)">
          <span>{{items.partsName}}</span>
          <span class="priceDiff" v-if="items.priceDiff>0">+ RMB {{items.priceDiff}}</span>
          <span class="priceDiff" v-else-if="items.priceDiff<0">- RMB {{Math.abs(items.priceDiff)}}</span>
        </div>
      </div>
      <!--<div>-->
        <!--<p class="singleName">CPU</p>-->
        <!--<div :class="{ cpuBorder: cpuNum==0}" @click="cpuChange('0')">-->
            <!--<span>Intel Core i3-6100 3.7G 3M 2133</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: cpuNum==1}"  @click="cpuChange('1')">-->
          <!--<span>New Core i5-8500(3.0G/9M/6核)</span><span class="priceDiff">+ RMB 480</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: cpuNum==2}"  @click="cpuChange('2')">-->
          <!--<span>New Core i7-8700(3.2G/12M/6核)</span><span class="priceDiff">+ RMB 780</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p class="singleName">DDR Memory</p>-->
        <!--<div :class="{ cpuBorder: ddrNum==1}" @click="ddrChange('1')">-->
          <!--<span>8G (4G*2) DDR4 2133</span><span class="priceDiff">- RMB 320</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: ddrNum==0}"  @click="ddrChange('0')">-->
          <!--<span>8G (8G*1) DDR4 2133</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: ddrNum==2}"  @click="ddrChange('2')">-->
          <!--<span>16G (16G*1)DDR4 2133</span><span class="priceDiff">+ RMB 970</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p class="singleName">HDD</p>-->
        <!--<div :class="{ cpuBorder: hddNum==0}" @click="hddChange('0')">-->
          <!--<span>1T 7200(3.5")</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: hddNum==1}"  @click="hddChange('1')">-->
          <!--<span>SSD 256G M.2 PCIe NVMe</span><span class="priceDiff">+ RMB 450</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: hddNum==2}"  @click="hddChange('2')">-->
          <!--<span>SSD 512G PCIe NVMe</span><span class="priceDiff">+ RMB 780</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p class="singleName">电源</p>-->
        <!--<div :class="{ cpuBorder: powerNum==0}" @click="powerChange('0')">-->
          <!--<span>Stander Power</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: powerNum==1}"  @click="powerChange('1')">-->
          <!--<span>High Efficient Power</span><span class="priceDiff">+ RMB 100</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: powerNum==2}"  @click="powerChange('2')">-->
          <!--<span>250W 珀金电源</span><span class="priceDiff">+ RMB 160</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p class="singleName">OS</p>-->
        <!--<div :class="{ cpuBorder: osNum==0}" @click="osChange('0')">-->
          <!--<span>Windows 10 64位</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: osNum==1}"  @click="osChange('1')">-->
          <!--<span>Windows 7 Pro 32位(中文版)</span><span class="priceDiff">+ RMB 900</span>-->
        <!--</div>-->
        <!--<div :class="{ cpuBorder: osNum==2}"  @click="osChange('2')">-->
          <!--<span>Windows 10 Pro 64位(中文版)</span><span class="priceDiff">+ RMB 900</span>-->
        <!--</div>-->
      <!--</div>-->
    </scroll-view>

    <div class="priceCommit">
      <div class="calPrice">RMB  {{totalPrice}}</div>
      <div class="commit" @click="infoCommit()">提交</div>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        productId:'',
        preCtoId:'',
        standardNum:1,
        proDetail:[],
        dataIndex:[{name:'cpuNum',num:'',price:0},{name:'ddrNum',num:'',price:0},{name:'hddNum',num:'',price:0},{name:'powerNum',num:'',price:0},{name:'osNum',num:'',price:0}],
        totalPrice: 0
      }
    },

    onLoad(option) {
      var that = this;
      console.log(4444444)
      that.productId = option.productId;
      that.preCtoId = option.preCtoId;
      for(var i=0;i<that.dataIndex.length;i++){
        that.dataIndex[i].num = ''
        that.dataIndex[i].price = 0
      }
      wx.request({
        url: that.$store.state.board.urlHttp +'/wechatapi/product/selectParts',
        method: "POST",
        data:{productId:option.productId,preCtoId:option.preCtoId},
        header: {'content-type': 'application/x-www-form-urlencoded'},
        dataType:'json',
        success: function (res) {
          that.proDetail = []
          if (res.data.success) {
            if(res.data.data&&res.data.data.length>0){
              console.log(res.data.data)
              that.proDetail = res.data.data;
              for(var i=0;i<that.proDetail.length;i++){
                if(that.proDetail[i].parts){
                  var dataSet = that.proDetail[i].parts;
                  var initPrice = '';
                  for(var j=0;j<dataSet.length;j++){
                    if(dataSet[j].standard==1){
                      that.dataIndex[i].price = parseInt(dataSet[j].prices);
                      initPrice = parseInt(dataSet[j].prices)
                    }
                  }
                  for(var j=0;j<dataSet.length;j++){
                    if(dataSet[j].standard!=1){
                      dataSet[j].priceDiff =  parseInt(dataSet[j].prices)-initPrice;
                    }else{
                      dataSet[j].priceDiff = 0;
                    }
                  }
                }
              }
              that.totalPrices(that.dataIndex);
            }
          }
        }
      })
    },
    onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }

      return {
        title: '分享活动',
        path: "/pages/configDetail/main?productId="+this.productId+"&preCtoId="+this.preCtoId ,
        success: function () {

        }
      }

    },
    methods: {
      detailChange(index,parts){
        var dataSet =  this.proDetail[index].parts;
        for(var i=0;i<dataSet.length;i++){
          if(dataSet[i].standard){
            dataSet[i].standard = '';
          }
        }
        this.dataIndex[index].num=parts.partsId
        this.dataIndex[index].price=parts.prices
        this.totalPrices(this.dataIndex);
      },
      infoCommit(){
        wx.navigateTo({
          url: '../infoCommit/main?id='
        })
      },
      totalPrices(data){
        this.totalPrice = 0;
        for(var k=0;k<data.length;k++){
          if(data[k].price){
            this.totalPrice += parseInt(data[k].price)
          }
        }
      }
    },
    async onPullDownRefresh() {
      // 停止下拉刷新
      wx.stopPullDownRefresh();
    },

    created() {
    },
    computed: {
      computerInfo() {
        return this.$store.state.board.computerInfoName
      }
    },
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
