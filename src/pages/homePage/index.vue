<template>
  <div class="vist-userInfo">
      <div class="sowingMap">
        <swiper indicator-dots="true" autoplay="true" interval="5000" duration="1000">
            <swiper-item  v-for="(item,index) in imgUrls" :key="index">
              <image :src="item" class="slide-image" style="width: 100%;height: 100%;"/>
            </swiper-item>
        </swiper>
      </div>
    <div class="containers">
        <div class="leftNav">
            <div v-for="(item,index) in dtasets" class="modeles" :key="index" :data-parentid="index" :class="{ hotModel: currentNum==index}" @click="changeNav">

              <i class="icon iconfont icon-remen1" v-if="index==0"></i>
              <i class="icon iconfont icon-PCtaishiji" v-if="index==1"></i>
              <i class="icon iconfont icon-bijibendiannao3" v-if="index==2"></i>
              {{item.name}}
              <div class="childModel" v-if="item.child.length>0" v-for="(items,ind) in item.child" :key="ind" :data-childid="ind"  :class="{ childHotModel: childCurNum==ind,childDis: currentNum==index}" @click="changeChildNav"  @touchstart.stop='changeChildNav'>
                <p>
                  {{items.name}}{{items.lines}}
                </p>
              </div>
            </div>
        </div>
        <div class="rightCon">
        <scroll-view scroll-y  :scroll-top=scrollTop>
          <div class="rightModel" :data-modelid="0" @click="detailsPage">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel" :data-modelid="1" @click="detailsPage">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel" :data-modelid="2" @click="detailsPage">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel" :data-modelid="3" @click="detailsPage">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel"  :data-modelid="4" @click="detailsPage">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
        </scroll-view>
      </div>
    </div>
    <div class="cliBtn">
      <div>
        <i class="icon iconfont icon-shoucang2"></i>
        我的收藏
      </div>
      <div class="contactCus">
        <i class="icon iconfont icon-iconfonta"></i>
        联系客服
      </div>
    </div>
    <div class="maskModel" :class="{maskBlock: authorLoc== true}">
      <div class="maskContainer">
          <div class="maskText">“司马e”要获取你的地理位置，是否允许？</div>
          <div class="maskBtn">
            <button @click="cancle()">取消</button>
            <button open-type="openSetting" @opensetting='handlerLocation' class="confirm">确定</button>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
  import QQMapWX from '../../../static/qqmap-wx-jssdk.min'
  export default {
    data() {
      return {
        currentNum:0,
        childCurNum:0,
        scrollTop:0,
        authorLoc: false,
        arrImage: [],
        checked: false,
        qrcodeUrl: '',
        ctxHeight: 650,
        backImg: require('../../../static/img/shareBack.png'),
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        dtasets:[{name:'热门机型',child:[]},{name:'台式机',child:[{name:'Elite',lines:'精英系列'},{name:'Pro ',lines:'专家系列'}]},{name:'笔记本',child:[{name:'Elite',lines:'精英系列'},{name:'Pro ',lines:'专家系列'}]}]
      }
    },

    onLoad() {
      console.log(111111111)
    },
    onShow(){
      var that = this;
      wx.getSetting({
        success: (res) => {
          console.log(res);
          console.log(res.authSetting['scope.userLocation']);
          if(res.authSetting['scope.userLocation']){
            that.location(that,QQMapWX);
          }else{
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {//非初始化进入该页面,且未授权
              that.authorLoc = true;
            } else if (res.authSetting['scope.userLocation'] == undefined) {//初始化进入
              that.location(that,QQMapWX);
            }
          }

        }
      })
    },
    onShareAppMessage(res) {
      var that = this;
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }

      var actId =that.$store.state.board.actId
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
//          wx.redirectTo({
//            url:"/pages/showPages/main"
//          })
        }
      }

    },
    methods: {
      closePrev() {
        this.checked = false;
        wx.hideLoading()
      },
      changeNav(e){
        console.log(e)
        this.childCurNum = 0;
        this.scrollTop = 0;
        this.currentNum = e.currentTarget.dataset.parentid
      },
      changeChildNav(e){
        console.log(e)
        this.scrollTop = 0;
        this.childCurNum = e.currentTarget.dataset.childid
      },
      detailsPage(e){
        wx.navigateTo({
          url: '../detailPage/main?modelId='+ e.currentTarget.dataset.modelid
        })
      },
      cancle(){
        this.authorLoc = false;
      },
      handlerLocation(){
        this.authorLoc = false;
      },
      location(that,QQMapWX){
        var qqmapsdk;
        qqmapsdk = new QQMapWX({
          key: 'OISBZ-SUKW6-LJ7SS-MXQHI-GC5FF-CQBGM'
        });
        wx.getLocation({
          type: 'gcj02',
          altitude: true,
          success: (res) => {
            console.log(res)
            qqmapsdk.reverseGeocoder({
              location: {
                latitude: res.latitude,
                longitude: res.longitude
              },
              success: (addressRes) => {
                that.authorLoc = false;
                console.log(addressRes);
                that.$store.state.board.address = addressRes.result.address_component.province + '' + addressRes.result.address_component.district;
                that.$store.state.board.location = addressRes.result.address_component.province;
              }
            })
          }
        })
      }
    },
    async onPullDownRefresh() {
      // 停止下拉刷新
      wx.stopPullDownRefresh();
    },

    created() {
    },
    computed: {

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
    .sowingMap{
      width: 100%;
      height: 98px;
      swiper{
        width: 100%;
        height: 100%;
      }
    }
    .containers{
      width: 100%;
      height: calc(100% - 145px);
      .leftNav{
        width: 100px;
        height: 100%;
        float: left;
        background-color: #F5F5F5;
        .modeles{
          width: 100%;
          /*height: 50px;*/
          line-height: 50px;
          font-size: 14px;
          color: #0096D6;
          border-bottom: 1px solid #fff;
          text-align: left;
          /*box-sizing: border-box;*/
          i{
            margin-left: 10px;
            display: inline-block;
            margin-right: 2px;
            height: 30px;
            position: relative;
            top:2px;
          }
          .icon-bijibendiannao3{
            width: 17px;
            font-size: 19px;
          }
          .childModel{
            width: 100%;
            /*height: 50px;*/
            line-height: 50px;
            font-size: 12px;
            color: #0096D6;
            text-align: center;
            border-bottom: 1px solid #fff;
            display: none;
            background-color: #F5F5F5;
            p{
              line-height: 50px;
            }

          }
          .childHotModel{
            color:#101010;
            background-color: #fff;
            border-left: 2px solid #0096D6;
          }
          div.childDis{
            display: block;
          }
        }
        .hotModel{
          background-color: #0096D6;
          color: #fff;
          border-bottom: 0px;
        }
      }
      .rightCon{
        float: left;
        width: calc(100% - 100px);
        height: 100%;
        /*background-color: #fff;*/
        scroll-view{
          height: 100% ;
          .rightModel{
            width: 256px;
            height: 160px;
            margin: 20px auto;
            background-color: #F5F5F5;
            text-align: center;
            .rightImg{
              width: 242px;
              height: 100px;
              margin: 0 auto;
              margin-top: 20px;
            }
            p{
              height: 23px;
              margin-top: 5px;
              font-size: 10px;
              color: #5A5A5A;
              line-height: 15px;
            }
          }
        }

      }
    }
    .cliBtn{
      width: 100%;
      height: 47px;
      position: fixed;
      left: 0px;
      bottom:0px;
      div{
        width: 50%;
        float: left;
        box-sizing: border-box;
        height: 47px;
        line-height: 47px;
        background-color: rgba(0, 150, 217, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        text-align: center;
        font-family: Arial;
        i{
          display: inline-block;
          font-size: 20px;
          position: relative;
          top: 3px;
        }
      }
      .contactCus{
        border-left: 1px solid #fff;
      }
    }
    .maskModel{
      width: 100%;
      height: 100%;
      display: none;
      background-color: rgba(0,0,0,.7);
      position: fixed;
      left: 0px;
      top:0px;
      z-index: 1000;
      .maskContainer{
        width: 80%;
        height: 110px;
        margin: 0 auto;
        margin-top: 50%;
        background-color: #fff;
        .maskText{
          padding: 20px;
          padding-bottom: 10px;
          font-size: 14px;
          text-align: center;
          color: #999;
        }
        .maskBtn{
          button::after{
            border:none;
          }
          button{
            width: 50%;
            float: left;
            border-radius: 0px;
            box-sizing: border-box;
            border-top: 1px solid #ccc;
            background-color: #fff;
          }
          .confirm{
            color: #3CC51F;
            border-left: 1px solid #ccc;
          }
        }
      }
    }
    div.maskBlock{
      display: block;
    }
  }
</style>
