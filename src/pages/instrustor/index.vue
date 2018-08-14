<template>
  <div class="vist-userInfo">
      <div class="sowingMap">
        <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
            <swiper-item  v-for="(item,index) in imgUrls" :key="index">
              <image :src="item" class="slide-image" style="width: 100%;height: 100%;"/>
            </swiper-item>
        </swiper>
      </div>
    <div class="containers">
        <div class="leftNav">
            <div v-for="(item,index) in dtasets" class="modeles" :key="index" :data-set="index" :class="{ hotModel: currentNum==index}" @click="changeNav(index)">
                {{item.name}}

              <div class="childModel" v-if="item.child.length>0" v-for="(items,ind) in item.child" :key="ind" :dataSet="ind"  :class="{ childHotModel: childCurNum==ind,childDis: currentNum==index}" @click="changeChildNav(ind)"  @touchstart.stop='changeChildNav(ind)'>
                <p>
                  {{items.name}}{{items.lines}}
                </p>
              </div>
            </div>
        </div>
      <div class="rightCon">
        <scroll-view scroll-y>
          <div class="rightModel" @click="detailsPage('0')">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
          <div class="rightModel">
            <img class="rightImg" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
            <p>惠普战 99 G1移动工作站</p>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        currentNum:0,
        childCurNum:0,
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
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        dtasets:[{name:'热门机型',child:[]},{name:'台式机',child:[{name:'Elite',lines:'精英系列'},{name:'Pro ',lines:'专家系列'}]},{name:'笔记本',child:[{name:'Elite',lines:'精英系列'},{name:'Pro ',lines:'专家系列'}]}]
      }
    },

    onLoad() {
      console.log(111111111)
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
      changeNav(index){
        this.childCurNum = 0;
        this.currentNum = index
      },
      changeChildNav(ind){
        this.childCurNum = ind
      },
      detailsPage(index){
        wx.navigateTo({
          url: '../detailPage/main?id='+index
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
      height: calc(100% - 98px);
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
          text-align: center;
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
  }
</style>
