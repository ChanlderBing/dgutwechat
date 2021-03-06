// index.js
// 获取应用实例
const util = require('../../utils/util');
const api = require('../../config/api.js');
const app = getApp()

Page({
  data: {
    res: {},
    userInfo: {},
    hasUserInfo: false
  },
  onLoad() {
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo')
      })
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
        // wx.setStorageSync('userInfo', res.userInfo);
        this.loginByWeixin()
      }
    })
  },

  loginByWeixin() {
    let code = null;
    let that = this
    return new Promise(function (resolve, reject) {
      return util.login().then((res) => {
        code = res;
        return util.getUserInfo()
      }).then((res) => {
        //登录远程服务器
        util.request(api.AuthLoginByWeixin, { code: code, userInfo: res }, 'POST').then(res => {
          if (res.errno === 0 && res.data.userInfo.schoolId) {
            res.data.userInfo.avatar = that.data.userInfo.avatarUrl
            that.setData({
              'userInfo.nickname': res.data.userInfo.nickname
            })
            wx.setStorageSync('token', res.data.token);
            wx.setStorageSync('logtime',Date.now())
            wx.setStorageSync('userInfo', res.data.userInfo);
            
            resolve(res);
          } else {
            wx.setStorageSync('token', res.data.token);
            wx.setStorageSync('userInfo', res.data.userInfo);
            that.setData({
              'userInfo.nickname': res.data.userInfo.nickname
            })
            wx.navigateTo({
              url: '../myInfo/myInfo',
            })
          }
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      })
    });
  },
  // 事件处理函数
  changeInfo() {
    wx.navigateTo({
      url: '../auth/auth'
    })
  },
  checkRecord() {
    wx.navigateTo({
      url: '../record/record',
    })
  },
  logout(){
    this.setData({
      userInfo:'',
    })
    wx.removeStorageSync('token')
    wx.removeStorageSync('userInfo')
  }
})

