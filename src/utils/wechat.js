import wx from './wx'

export function login () {
  var that = this;
  return new Promise((resolve, reject) => {
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
            var url = 'https://www.hejinkai.com/wechatapi/service/login?appid=wx6f8fab67827259b0&secret=ed71f12d39b999ee6c47d0b77a6f2c8c&code=' + code;
            console.log(url);
            wx.request({
              url: url,
              success: function (res) {
                // 回到原来的地方放
                // wx.navigateBack();
                console.log(res)
                if (res.data.success) {
                  wx.setStorageSync('sessionID', res.data.sessionID)
                  // var sysUrl = 'http://10.29.74.237:8888/wechatapi/service/syncUser?encryptedData=' + encodeURIComponent(keys.encryptedData) + '&iv=' + encodeURIComponent(keys.iv) + '&sessionID=' + res.data.sessionID;
                  var sysUrl = 'https://www.hejinkai.com/wechatapi/service/syncUser?encryptedData=' + encodeURIComponent(key.encryptedData) + '&iv=' + encodeURIComponent(key.iv) + '&sessionID=' + res.data.sessionID;
                  console.log(sysUrl)
                  wx.request({
                    url: sysUrl,
                    success: function (res) {
                      // 回到原来的地方放
                      // wx.navigateBack();
                      console.log(res)
                      if (res.data.success) {
                        var currentPages = wx.getStorageSync('currentPages')
                        if(currentPages =="pages/showPages/main" ){
                          var path = currentPages;
                        }else{
                          var path =  "pages/index/main";
                        }
                        console.log(444444)
                        console.log(path)
                        wx.redirectTo({
                          url: "/" + path
                          // url: "/pages/index/main?scenicSpotId=" + that.scenicSpotId
                        })
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
  })
}

export function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}

export function setStorage (key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
  })
}

export function getStorage (key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject })
  })
}

export function getLocation (type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

export function wxGetImageInfo (src) {
  return new Promise((resolve, reject) => {
    wx.wxGetImageInfo({ src: src, success: resolve, fail: reject })
  })
}

export function wxCanvasToTempFilePath (canvasId) {
  return new Promise((resolve, reject) => {
    wx.wxCanvasToTempFilePath({ canvasId: canvasId, success: resolve, fail: reject })
  })
}

export function wxSaveImageToPhotosAlbum (filePath) {
  return new Promise((resolve, reject) => {
    wx.wxSaveImageToPhotosAlbum({ filePath: filePath, success: resolve, fail: reject })
  })
}
