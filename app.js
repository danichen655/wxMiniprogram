// app.js
App({
  onLaunch() {
    if(!wx.cloud){
      console.error("Error en el cloud")

    }else{
      wx.cloud.init({

        env: 'cloud-9gg47nqm2b40b33b',
        traceUser: true, //para comprobar quien usa la base de datos
      })

    }
    this.globalData = {}
    this.userInfo = {}
    // 展示本地存储能力
   /* const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })*/
  },
 
})
