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
  // 事件处理函数
  changeInfo() {
    wx.navigateTo({
      url: '../myInfo/myInfo'
    })
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
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        wx.setStorageSync('userInfo', res.userInfo);
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
          if (res.errno === 0) {
            wx.setStorageSync('token', res.data.token);
            resolve(res);
          } else {
            reject(res);
          }
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      })
    });
  }
})

