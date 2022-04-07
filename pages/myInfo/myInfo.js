// pages/myInfo.js
const util = require('../../utils/util');
const api = require('../../config/api.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        myinfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      util.request(api.Userinfocheck,{}, 'GET').then(res => {
        console.log(res);
        if (res.errno === 0) {
          this.setData({
            myinfo: res.data
          })
        } else {
          reject(res);
        }
      }).catch((err) => {
        reject(err);
      });

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    setMyInfo(e) {
        util.request(api.Userinfochange, { userInfo: e.detail.value }, 'POST').then(res => {
          console.log(res);
            if (res.errno === 0) {
              wx.showToast({
                title: '修改成功',
                icon: '',   
                duration: 2000,      //停留时间
              })
            } else {
              console.log(11);
            }
          }).catch((err) => {
            
          });
      },
})