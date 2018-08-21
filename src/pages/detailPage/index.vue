<template>
  <div class="vist-userInfo">
    <div class="imgShow">
      <img class="productImg" :src="proInfos.filePath" alt="" mode="aspectFit">
    </div>
    <div class="productPrice">
      ¥ {{proInfos.prices}}
    </div>
    <div class="productTitle">
      {{proInfos.productName}}
    </div>
    <div class="productDetail">
      <div class="productTopNav">
        <div class="productNav" @click="detailContent('0')">
          <p :class="{ bottomLines: currentNum==0}">概述</p>
        </div>
        <div class="productNav" @click="detailContent('1')">
          <p :class="{ bottomLines: currentNum==1}">规格</p>
        </div>
        <div class="productNav" @click="detailContent('2')">
          <p :class="{ bottomLines: currentNum==2}">视频</p>
        </div>
      </div>
      <scroll-view scroll-y :scroll-top=scrollTop :class="{detailText: currentNum==0}">
        <div>
          <p>{{proInfos.productSummary}}</p>
          <!--<p>这款高性能笔记本电脑搭载高速处理器和显卡，不仅具有经过认证的出色性能，而且价格经济实惠，能为您的项目提供强有力的支持。</p>-->
          <!--<p>Windows 10 专业版或其他操作系统可选</p>-->
          <!--<p> 高性能</p>-->
          <!--<p>配备英特尔® 至强® 6 核处理器和 32GB 内存，即使一次运行多个应用，响应速度亦是快如闪电。4TB 高速存储支持快速访问大型 4K 文件，而 NVIDIA® Quadro® 显卡可在缩短渲染时间。-->
          <!--</p>-->
          <!--<p>软件认证-->
          <!--</p>-->
          <!--<p>这款笔记本电脑经过多项认证，可处理重要的应用，您大可信心百倍地开展工作。我们与 Autodesk 和 SolidWorks 等软件供应商龙头建立了合作关系，可进一步优化惠普战 99 的性能，给您出色的使用体验。-->
          <!--</p>-->
          <!--<p> 全心打造，持久耐用</p>-->
          <!--<p>惠普战 99 经过精心设计，通过了严格的军用标准测试，能够适应跌落、强震等恶劣环境1。有了这款耐用性出色的笔记本电脑，您大可信心百倍地在旅途中开展工作。-->
          <!--</p>-->
          <!--<p>配置</p>-->
          <!--<p>1、Windows 10 Pro for Workstations</p>-->
          <!--<p>时刻高效工作，不惧任何环境。Windows 10 Pro 结合惠普的强大安全功能、协作功能和连接功能，让您在使用惠普战 99 时全天保持高效。-->
          <!--</p>-->
          <!--<p>2、专用 3D 显卡</p>-->
          <!--<p> 搭载经过认证的 NVIDIA® Quadro® 显卡，可轻松应对复杂的 2D 和 3D 模型，同时支持高品质软件应用，升级后的稳定性和性能均更上一层楼。-->
          <!--</p>-->
          <!--<p> 第八代英特尔® 至强® 处理器</p>-->
          <!--<p> 搭载的英特尔® 至强® 6 核处理器性能强劲，可处理复杂的多线程应用（如 Autodesk Revit®），让您一次性应对多项工作。</p>-->
          <!--<p> 快速存储</p>-->
          <!--<p>配备高达 1 TB 的本地 PCIe NVMe 存储，存储速度较标准的 HDD 快 21 倍，较 SATA SSD 快 6 倍，可大幅提高工作效率。</p>-->
          <!--<p>3、长效耐用电池与高效充电技术</p>-->
          <!--<p>电池续航时间长达 10 小时，且支持快速充电，只需 30 分钟即可充至 50%，可确保长时间保持连接状态。</p>-->
          <!--<p>4,5、高清网络摄像头</p>-->
          <!--<p> 配备的 720 像素网络摄像头画质清晰，能实现更优质的远程协作和沟通。借助人脸识别和网络摄像头快门技术，快速实现安全登录。</p>-->
          <!--<p>6、业界前沿的安全性</p>-->
          <!--<p>借助 HP Sure Start G4，发挥硬件强制性自我修复保护功能，自动恢复 BIOS，保护机密性文件。</p>-->
          <!--<p>7、 出色的音频功能</p>-->
          <!--<p> Bang &amp; Olufsen 定制调音扬声器可为您提供出色的音效。</p>-->
          <!--<p> HP Thunderbolt™ 扩展坞 G2</p>-->
          <!--<p> 借助惠普功能强大的扩展坞解决方案，摆脱杂乱无章的接线，打造整洁利落的工作空间。具有 Thunderbolt™ 连接功能，传输速度快如闪电，让您体验出色性能。</p>-->
          <!--<p>8、 Windows 10 专业版或其他操作系统可选</p>-->
        </div>
      </scroll-view>
      <scroll-view scroll-y :scroll-top=scrollTop :class="{detailText: currentNum==1}">
        <div>
          <p>{{proInfos.productSpec}}</p>
          <!--<p>1、操作系统</p>-->
          <!--<p>Windows 10 Pro 64 – 惠普建议使用 Windows 10 Pro。 1</p>-->
          <!--<p>Windows 10 家庭版 64 1</p>-->
          <!--<p>Windows 10 Pro for Workstations 64 位 1</p>-->
          <!--<p>FreeDOS 2.0</p>-->
          <!--<p>2.、处理器系列</p>-->
          <!--<p>第八代英特尔® 酷睿™ i7处理器（i7-8750H、i7-8850H）</p>-->
          <!--<p>第八代英特尔® 酷睿™ i5处理器（i5-8300H、i5-8400H）</p>-->
          <!--<p>英特尔® 至强® E3处理器（E3-2176M、E3-2186M） 2,3</p>-->
          <!--<p>3、处理器</p>-->
          <!--<p>带英特尔® UHD 630 显卡的英特尔® 酷睿™i7-8750H 处理器（2.2 GHz 基本频率、采用英特尔® Turbo Boost 技术可高达 4.1 GHz、9 MB 高速缓存、6 核）</p>-->
          <!--<p>带英特尔® UHD 630 显卡的英特尔® 酷睿™i5-8300H 处理器（2.6 GHz 基本频率、采用英特尔® Turbo Boost 技术可高达 4.0 GHz、8 MB 高速缓存、4 核）</p>-->
          <!--<p>带英特尔® UHD 630 显卡的英特尔® 酷睿™i5-8400H 博锐™ 处理器（2.5 GHz 基本频率、采用英特尔® Turbo Boost 技术可高达 4.2 GHz、8 MB 高速缓存、4 核）</p>-->
          <!--<p>带英特尔® UHD 630 显卡的英特尔® 酷睿™i7-8850H 博锐™ 处理器（2.6 GHz 基本频率、采用英特尔® Turbo Boost 技术可高达 4.3 GHz、9 MB 高速缓存、6 核）</p>-->
          <!--<p>带英特尔® UHD P630显卡的英特尔® 至强® E 2176M 博锐™ 处理器（2.7 GHz 基本频率、采用英特尔® Turbo Boost 技术可高达 4.4 GHz、12 MB 高速缓存、6 核）-->
            <!--2,3,4</p>-->
        </div>
      </scroll-view>
      <scroll-view scroll-y :scroll-top=scrollTop :class="{detailText: currentNum==2}">
        <div>
            <div class="videoPlay" @click="videoPlays">
              <img src="/static/img/videoPlay.jpg" alt="">
            </div>
        </div>
      </scroll-view>
    </div>
    <div class="customized" @click="startCustom(proInfos.productId)">
      <i class="icon iconfont icon-shangwutubiao-"></i>
      开始定制
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        productId:'',
        currentNum: 0,
        scrollTop: 0,
        proInfos:''
      }
    },

    onLoad(option) {
      var that = this;
      that.currentNum = 0;
      console.log(option)
      console.log(22222222)
      that.productId = option.productId
      that.proInfos = ''
      wx.request({
        url: that.$store.state.board.urlHttp +'/wechatapi/product/getProductById',
        method: "POST",
        data:  {productId:option.productId},
        header: {'content-type': 'application/x-www-form-urlencoded'},
        success: function (res) {
          console.log(res)
          if (res.data.success) {
            if(res.data.data){
              that.proInfos = res.data.data;
              that.proInfos.filePath = that.$store.state.board.urlHttp + that.proInfos.filePath
              that.$store.state.board.computerInfoName  = that.proInfos.productName
            }
          }else{
            wx.showToast({
              title: '获取详细信息失败。',
              icon: 'none',
              duration: 1000
            })
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
        path: "/pages/detailPage/main?productId="+this.productId ,
        success: function () {

        }
      }

    },
    methods: {
      detailContent(index) {
        this.currentNum = index;
        this.scrollTop = 0;
      },
      startCustom(index) {
        wx.navigateTo({
          url: '../productConfig/main?productId=' + index
        })
      },
      videoPlays(){
        wx.showToast({
          title: '无视频文件',
          icon: 'none',
          duration: 1000
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
    background-color: #fff;
    font-family: Arial !important;
    /*background-color: red;*/
    .imgShow {
      width: 100%;
      height: 200px;
      text-align: center;

    }
    .productImg {
      width: 160px;
      height: 160px;
      margin: 20px auto;
    }
    .productPrice {
      color: #E51C23;
      font-size: 16px;
      margin-left: 20px;
    }
    .productTitle {
      color: #4A4A4A;
      font-size: 20px;
      text-align: left;
      margin-left: 20px;
    }
    .productDetail {
      height: calc(100% - 305px);
      margin-top: 13px;
      .productTopNav {
        width: 100%;
        height: 40px;
        .productNav {
          float: left;
          font-size: 16px;
          width: 33.3333333%;
          height: 38px;
          line-height: 38px;
          text-align: center;
          border-bottom: 1px solid #F5F5F5;
          p{
            width: calc(100% - 40px);
            margin: 0 auto;
          }
          p.bottomLines {
            border-bottom: 2px solid #0096D6;
          }
        }

      }
      scroll-view {
        height: calc(100% - 40px);
        display: none;
        div {
          padding: 10px 10px;
          color: #575757;
          font-size: 12px;
          text-align: left;
          line-height: 17px;
          .videoPlay{
            padding: 10px;
            img{
              width: 100%;
              height: 190px;
            }
          }
        }
      }
      scroll-view.detailText {
        display: block;
      }
    }
    .customized {
      width: 100%;
      height: 50px;
      line-height: 50px;
      position: fixed;
      left: 0px;
      bottom: 0px;
      color: #fff;
      font-size: 18px;
      text-align: center;
      background-color: #0096D6;
      i {
        display: inline-block;
        font-size: 22px;
        position: relative;
        top: 2px;
      }
    }

  }
</style>
