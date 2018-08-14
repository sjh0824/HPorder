function login(that, flag, func) {
  console.log(new Date().getTime())
  wx.login({
    success: function (res) {
      var code = res.code;
      // wx.setStorageSync('code', res.code)
      wx.getUserInfo({
        lang: "zh_CN",
        success: function (res) {
          console.log(new Date().getTime())
          var key = {};
          key.encryptedData = res.encryptedData
          key.iv = res.iv
          that.$store.state.board.nickName = res.userInfo.nickName;
          that.$store.state.board.avatarUrl = res.userInfo.avatarUrl;
          var url = that.$store.state.board.urlHttp + '/wechatapi/service/login';
          // console.log(encodeURIComponent(key.iv))
          // console.log(key.iv)
          // var url = that.$store.state.board.urlHttp+ '/wechatapi/service/newLogin?appid='+ that.$store.state.board.appid+'&secret='+ that.$store.state.board.secret+'&code='+code+'&encryptedData=' + encodeURIComponent(key.encryptedData) + '&iv=' + encodeURIComponent(key.iv);
          var url = that.$store.state.board.urlHttp + '/wechatapi/service/newLogin';
          wx.request({
            url: url,
            method: "POST",
            data: {
              appid: that.$store.state.board.appid,
              secret: that.$store.state.board.secret,
              code: code,
              encryptedData: res.encryptedData,
              iv: res.iv
            },
            header: {'content-type': 'application/x-www-form-urlencoded'},
            success: function (res) {
              if (res.data.success) {

                console.log(new Date().getTime())
                that.$store.state.board.sessionID = res.data.sessionID
                wx.redirectTo({
                  url: '/pages/homePage/main'
                })

              }
            }
          })
          // wx.request({
          //   url: url,
          //   method: "POST",
          //   data: {appid: that.$store.state.board.appid, secret: that.$store.state.board.secret, code: code},
          //   header: {'content-type': 'application/x-www-form-urlencoded'},
          //   success: function (res) {
          //     if (res.data.success) {
          //       // wx.setStorageSync('sessionID', )
          //       that.$store.state.board.sessionID = res.data.sessionID
          //       var sysUrl = that.$store.state.board.urlHttp+ '/wechatapi/service/syncUser?encryptedData=' + encodeURIComponent(key.encryptedData) + '&iv=' + encodeURIComponent(key.iv) + '&sessionID=' + res.data.sessionID;
          //      wx.request({
          //         url: sysUrl,
          //         success: function (res) {
          //           if (res.data.success) {
          //             // var currentPages = wx.getStorageSync('currentPages')
          //             // that.$store.state.board.headPic=[]
          //             var otherHelpId =  that.$store.state.board.otherHelpId;
          //             var actId =  that.$store.state.board.actId;
          //             var sessionID =  that.$store.state.board.sessionID;
          //             if (otherHelpId) {
          //               if(flag){
          //                 func(sessionID,otherHelpId)
          //               }else{
          //                 func(sessionID,actId,otherHelpId)
          //               }
          //             } else {
          //               var actId =  that.$store.state.board.actId;
          //               var sessionID =  that.$store.state.board.sessionID;
          //               if(!flag){
          //                 func(sessionID,actId);
          //               }
          //
          //             }
          //
          //           }
          //         }
          //       })
          //     }
          //   }
          // })
        }
      })
    }
  })
}
module.exports = {
  login: login
}
