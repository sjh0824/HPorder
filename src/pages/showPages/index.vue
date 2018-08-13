<template>
  <div class="vist-userInfo">
    <div style="width: 100%;height: 1300px;margin-top: -1300px;">
      <!--<div style="width: 100%;">-->
      <canvas canvas-id="shareCanvas" style="width: 100%;" :style="{height:ctxHeight+'px'}"></canvas>

      <canvas canvas-id="listddd" style="width: 100%;height: 400px;" ></canvas>

    </div>
    <!--<div class="containers" style="background-image: url('/static/img/shareBack1.png'); background-size: 100% 100%">-->
    <div class="containers">
      <!--<img src="/static/img/shareBack.png" alt="" style="width: 100%;height: 100%;position: absolute;">-->
      <div class="nickname">
        <img :src="avatarUrl" alt="" style="">
        <!--<span class="names" style="">-->
        <!--{{nickName}}-->
        <!--</span>-->
        <!--<span class="titles" style=" ">-->
        <!--夏日狂欢，强力推荐-->
        <!--</span>-->
      </div>

      <img class="conImg" :src="getGoLink" alt="">
      <div class="qrcodes" style="">
        <!--<span class="helpText"-->
        <!--style="">快来给我助力吧</span>-->
        <img class="codeImg" :src="qrcodeUrl" alt=""
             style="">
        <!--<span class="codeText" style="">长按识别小程序码</span>-->
      </div>
      <img class="backText" src="/static/img/shareBack1.png" alt="">
    </div>
    <div class="menu" style="">
      <p style="">
        这是你的专属海报，发送给好友<br/>
        3人助力免费赢得原价<span>288 </span>元试听课机会一次
      </p>
      <button class="shares" open-type="share">
        分享
      </button>

      <button class="posters" @click="preview">
        保存图片
      </button>
    </div>


  </div>
</template>

<script>

  export default {
    data() {
      return {
        arrImage: [],
        checked: false,
        qrcodeUrl: '',
        ctxHeight: 650,
        backImg: require('../../../static/img/shareBack.png')
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

      var actId =that.$store.state.board.actId
      var helpId = that.$store.state.board.myHelpId
      var path = "/pages/activePower/main";

      if (actId && helpId) {
        path = path + "?actId=" + actId + "&helpId=" + helpId
      } else {

      }
      console.log(path)
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
      drawImage() {
        wx.showLoading({
          title: '绘制中...',
        })
        let that = this;
        const ctx = wx.createCanvasContext('shareCanvas')
        ctx.setFillStyle('#fff')
        ctx.fillRect(0, 0, this.getWindowWidth, that.ctxHeight);
        ctx.draw(true)
        // wx.getImageInfo({
        //   src: 'https://cloud.githubusercontent.com/assets/4652816/15662614/178efd46-2725-11e6-8952-09d7836e968d.png',
        //   success: (res) => {
        //     console.log(res)
        //     var heights = that.ctxHeight - 70
        //     ctx.drawImage(res.path, 13, 33, 240, 240)
        //     ctx.draw(true)
        //   }
        // })
        wx.getImageInfo({
          src: that.$store.state.board.goLink,
          success: (res) => {
            console.log(res)
            // ctx.drawImage('/static/img/shareBack.png', 13, 13, (that.getWindowWidth - 25), that.ctxHeight - 30)
            // ctx.draw(true)
            var heights = that.ctxHeight - 70
            ctx.drawImage(res.path, 13, 33, (that.getWindowWidth - 26), heights-50)
            ctx.draw(true)
            ctx.drawImage('/static/img/shareBack1.png', 13, 33, (that.getWindowWidth - 26), heights)
            ctx.draw(true)
            if (that.avatarUrl) {
              wx.getImageInfo({
                src: that.avatarUrl,
                success: (res) => {
                  ctx.save()
                  ctx.beginPath()
                  ctx.arc(48, 65, 20, 0, Math.PI * 2, false);
                  // ctx.setStrokeStyle('#CAA363')
                  // ctx.stroke()
                  ctx.clip()
                  ctx.drawImage(res.path, 28, 45, 40, 40)
                  ctx.restore()
                  ctx.draw(true)

                  // ctx.setFillStyle('#CAA363')
                  // ctx.font = "bold 14px sans-serif";
                  // ctx.setTextAlign('left')
                  // ctx.fillText(that.nickName, 58, 38);
                  // ctx.draw(true)
                  // ctx.setFillStyle('#CAA363')
                  // ctx.setFontSize(12)
                  // ctx.setTextAlign('right')
                  // ctx.fillText("夏日狂欢，强力推荐", that.getWindowWidth - 10, 50);
                  // ctx.draw(true)
                }
              })
            }

            var qrcodeUrl = that.$store.state.board.qrcodeUrl
            //画二维码
            console.log('444444   ' + qrcodeUrl)
            // wx.getImageInfo({
            //   src: 'https://cloud.githubusercontent.com/assets/4652816/15662614/178efd46-2725-11e6-8952-09d7836e968d.png',
            //   success: (res) => {
            //     console.log(res)
            //     ctx.drawImage(res.path, (that.getWindowWidth - 126), heights - 96, 100, 100)
            //     ctx.draw(true)
            //     wx.hideLoading()
            //   }
            // })
            wx.getImageInfo({
              src: qrcodeUrl,
              success: (res) => {
                ctx.save()
                ctx.beginPath()
                ctx.arc((that.getWindowWidth - 76), heights-46, 50, 0, Math.PI * 2, false);
                ctx.setFillStyle('rgba(255, 255, 255, 0.7)')
                ctx.fill()
                ctx.clip()
                ctx.drawImage(res.path, (that.getWindowWidth - 126), heights - 96, 100, 100)
                ctx.restore()
                ctx.draw(true)
                //二维码文字
                // ctx.setFillStyle('#000')
                // ctx.setFontSize(13)
                // ctx.setTextAlign('right')
                // ctx.fillText('长按识别小程序码', that.getWindowWidth - 10, heights + 115);
                // ctx.draw(true)
                // ctx.setFillStyle('#CAA363')
                // ctx.setFontSize(20)
                // ctx.setTextAlign('left')
                // ctx.fillText('快来给我助力吧!', 15, heights + 95);
                // ctx.draw(true)
                wx.hideLoading()
              }
            })
          }
        })

      },
      preview() {
        wx.canvasToTempFilePath({
          canvasId: 'shareCanvas',
          success: (res) => {
            // wx.previewImage({
            //   current: res.tempFilePath, // 当前显示图片的http链接
            //   urls: [res.tempFilePath], // 需要预览的图片http链接列表
            //   success: (res) => {
            //   }
            // })
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: (res) => {
                wx.showToast({
                  title: '已保存到相册',
                  success: (res) => {

                  }
                })
              },
              fail: (res) => {
              }
            })


          }
        })
      },
      closePrev() {
        this.checked = false;
        wx.hideLoading()
      },
      saveImg() {

      }
    },
    async onPullDownRefresh() {
      // 停止下拉刷新
      wx.stopPullDownRefresh();
    },

    created() {
    },
    computed: {
      nickName() {
        return this.$store.state.board.nickName
      },
      getGoLink() {
        return this.$store.state.board.goLink
      },
      getAddress() {
        return this.$store.state.board.address

      },
      getWindowWidth() {
        return this.$store.state.board.windowWidth
      },
      getWindowHeight() {
        return this.$store.state.board.windowHeight
      },
      avatarUrl() {
        return this.$store.state.board.avatarUrl;
      }
    },
    mounted() {
      var that = this;
      this.checked = false

      wx.setNavigationBarTitle({
        title: "分享"
      })
      wx.showShareMenu({
        withShareTicket: true
      })
      that.ctxHeight = that.getWindowHeight + 64
      this.drawImage();
      var pages = getCurrentPages()
      var currentPage = pages[pages.length - 1]
      var url = currentPage.route
      if (url === "pages/showPages/main") {
        this.$store.state.board.isabled = false;
      } else {
        this.$store.state.board.isabled = true;
      }
      var sessionID = that.$store.state.board.sessionID
      var myHelpId =that.$store.state.board.myHelpId
      var actId = that.$store.state.board.actId

      var that = this;
      // 二维码获取
      var sysUrls = that.$store.state.board.urlHttp + '/wechatapi/qrcode/createWXQrcodeA';
      wx.request({
        url: sysUrls,
        method: "POST",
        data: {
          appid: that.$store.state.board.appid,
          secret: that.$store.state.board.secret,
          sessionID: sessionID,
          path: 'pages/activePower/main?actId=' + actId + "&helpId=" + myHelpId
        },
        header: {'content-type': 'application/x-www-form-urlencoded'},
        success: function (res) {
          if (res.data.success) {
            that.$store.state.board.qrcodeUrl = that.$store.state.board.urlHttp + res.data.qrcodeUrl
            // wx.setStorageSync("qrcodeUrl", )
            that.qrcodeUrl = that.$store.state.board.urlHttp + res.data.qrcodeUrl;
          }

        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .vist-userInfo {
    font-size: 22px;
    width: 100%;
    height: 100%;
    .containers {
      /*border: 1px solid #CAA363;*/
      width: calc(100% - 75px);
      /*padding: 5px;*/
      height: 79%;
      margin: 0 auto;
      margin-top: 12px;
      position: relative;
      border-radius: 10px;
      .nickname {
        /*margin-top: 10px;*/
        z-index: 100;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          float: left;
          /*border: 1px solid #CAA363;*/
          position: absolute;
          top: 12px;
          left: 15px;
          z-index: 200;
        }
        span {
          display: inline-block;
          color: #CAA363;
        }
        .names {
          margin-top: 5px;
          font-size: 16px;
          font-weight: bold;
          margin-left: 5px;
          vertical-align: middle;
        }
        .titles {
          font-size: 12px;
          float: right;
          margin-top: 24px;
        }
      }
    }
    .conImg {
      width: 100%;
      /*margin-top: 5px;*/
      height: calc(100% - 5px);
      border-radius: 8px;
      position: relative;
      z-index: 100;
    }

    .qrcodes {
      position: relative;
      height: 50px;
      z-index: 400;
      .helpText {
        position: absolute;
        left: 3px;
        top: 10px;
        font-size: 20px;
        color: #CAA363;
      }
      .codeImg {
        width: 84px;
        height: 84px;
        border-radius: 50%;
        background-color: rgba(255,255,255,.7);
        position: absolute;
        right: 13px;
        top: -100px;
      }
      .codeText {
        position: absolute;
        right: 0px;
        top: 35px;
        font-size: 10px;
        color: #575757;
      }
    }
    .backText {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 100
    }
    .menu {
      width: 100%;
      height: 14%;
      background: #fff;
      text-align: center;
      position: fixed;
      bottom: 0px;
      left: 0px;
      padding-bottom: 20px;
      p {
        font-size: 14px;
        text-align: center;
        color: #4A4A4A;
        padding: 0 20px;
        margin-bottom: 5px;
        span {
          color: #F05522;
          font-size: 16px;
        }
      }
      button {
        display: inline-block;
        margin-top: 10px;
        width: 99px;
        height: 34px;
        border-radius: 17px;
        background-size: cover;
        font-size: 13px;
        text-align: center;
        line-height: 32px;
        cursor: pointer;
      }
      .shares {
        border: 1px solid #F05522;
        color: #F05522;
        background: #fff;
      }
      .posters {
        border: 1px solid #F05522;
        background-color: #F05522;
        color: rgba(255, 255, 255, 1);
        margin-left: 20px;
      }
    }
  }
</style>
