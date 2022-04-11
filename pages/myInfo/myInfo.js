// pages/myInfo.js
const util = require('../../utils/util');
const api = require('../../config/api.js');
const drawQrcode = require('../../utils/weapp.qrcode.js')

Page({

    /**
     * 页面的初始数据S
     */
    data: {
        myinfo:{},
        yinfo:{
        a:'什么东西',
        b:'aaaa'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(api);
      console.log(drawQrcode);
      this.draw()
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
    draw(){
      drawQrcode({
        width: 200,
        height: 200,
        canvasId: 'myQrcode',
        // ctx: wx.createCanvasContext('myQrcode'),
        text: `http://192.168.1.7:8360/api/auth/Check?inform=${this.data.yinfo.a}`,
        // v1.0.0+版本支持在二维码上绘制图片
        // image: {
        //   imageResource: '../../images/me.png',
        //   dx: 70,
        //   dy: 70,
        //   dWidth: 60,
        //   dHeight: 60
        // }
        callback:function (e) {
          console.log(e);
        }
      })
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