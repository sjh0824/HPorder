function login (that) {

  wx.login({
    success: function (res) {
      var code = res.code;
      wx.setStorageSync('code', res.code)
      wx.getUserInfo({
        lang: "zh_CN",
        success: function (res) {
          console.log(res)
          var key = {};
          key.encryptedData = res.encryptedData
          key.iv = res.iv
          wx.setStorageSync('recipient',key)
          that.$store.state.board.nickName = res.userInfo.nickName;
          that.$store.state.board.avatarUrl = res.userInfo.avatarUrl;
          // if (res.success) {
          // var url = 'http://10.29.74.237:8888/wechatapi/service/login?appid=wx961c52a1d78d5c01&secret=18baa3b45594258825f338503ffc1f59&code=' + code;
          // var url = 'https://www.hejinkai.com/wechatapi/service/login?appid=wx6f8fab67827259b0&secret=ed71f12d39b999ee6c47d0b77a6f2c8c&code=' + code;
          var url = 'https://www.hejinkai.com/wechatapi/service/login';
          console.log(url);
          wx.request({
            url: url,
            method: "POST",
            data:{appid:that.$store.state.board.appid,secret:that.$store.state.board.secret,code:code},
            header:{'content-type': 'application/x-www-form-urlencoded'},
            success: function (res) {
              // 回到原来的地方放
              // wx.navigateBack();
              console.log(res)
              if (res.data.success) {
                wx.setStorageSync('sessionID', res.data.sessionID)
                // var sysUrl = 'http://10.29.74.237:8888/wechatapi/service/syncUser?encryptedData=' + encodeURIComponent(keys.encryptedData) + '&iv=' + encodeURIComponent(keys.iv) + '&sessionID=' + res.data.sessionID;
                var sysUrl = 'https://www.hejinkai.com/wechatapi/service/syncUser?encryptedData=' + encodeURIComponent(key.encryptedData) + '&iv=' + encodeURIComponent(key.iv) + '&sessionID=' + res.data.sessionID;
                // var sysUrl = 'https://www.hejinkai.com/wechatapi/service/syncUser' ;
                console.log(sysUrl)
                wx.request({
                  url: sysUrl,
                  // method: "POST",
                  // data:{encryptedData:encodeURIComponent(key.encryptedData),iv: encodeURIComponent(key.iv),sessionID:res.data.sessionID},
                  // header:{'content-type': 'application/x-www-form-urlencoded'},
                  success: function (res) {
                    // 回到原来的地方放
                    // wx.navigateBack();
                    console.log(res)
                    if (res.data.success) {
                      var currentPages = wx.getStorageSync('currentPages')
                      // if(currentPages =="pages/showPages/main" ){
                      //   wx.redirectTo({
                      //     url: "/pages/showPages/main"
                      //     // url: "/pages/index/main?scenicSpotId=" + that.scenicSpotId
                      //   })
                      // }
                      var sharedId = wx.getStorageSync('sharedId');
                      console.log(sharedId)
                      if(sharedId){
                        wx.redirectTo({
                          url: "/pages/activePower/main"
                          // url: "/pages/index/main?scenicSpotId=" + that.scenicSpotId
                        })

                      }

                    }
                  }
                })
              }
            }
          })
          // }
        }
      })
      console.log(res)



    }
  })
}

module.exports = {
  login: login
}
