// index.js
// 获取应用实例
const util = require('../../utils/util');
const api = require('../../config/api.js');
const app = getApp()

Page({
  data: {
    res: {},
    userInfo: {},
    hasUserInfo: false,
    canIUse: false,
    canIUseGetUserProfile: false,
    canIUseOpenData: false // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  changeInfo() {
    wx.navigateTo({
      url: '../myInfo/myInfo'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
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
            //存储用户信息
            wx.setStorageSync('userInfo', res.data.userInfo);
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

