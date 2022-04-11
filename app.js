// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    let lasttime = wx.getStorageSync('logtime')
    if (Date.now() - lasttime >= 86400000) {
      wx.removeStorageSync('token')
      wx.removeStorageSync('userInfo')
    }
  },
  globalData: {
    userInfo: null
  }
})
