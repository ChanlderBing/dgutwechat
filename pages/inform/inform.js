// pages/inform/inform.js
const util = require('../../utils/util')
const api = require('../../config/api.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
          isStay: ['是','否'],
          index: 0,
          is_stay: '',
          is_green: '',
          location: '',
          last_time: '',
          temp: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
    getLocation() {
        const that = this
        wx.getLocation({
          success: function(res) {
            console.log(res)
            wx.request({
              url: 'https://api.map.baidu.com/reverse_geocoding/v3',
              data: {
                ak: 'ecSTrFWkDXtQmeYvMVNxDgNfgwwg1knY',
                location: `${res.latitude},${res.longitude}`,
                output: 'json'
              },
              success(res) {
                console.log(res)
                let addr = res.data.result.addressComponent
                that.setData({
                  location: addr.province + addr.city + addr.district
                })
              }
            })
          },
          fail(err) {
            console.log(err)
            wx.showModal({
              title: '位置未授权',
              content: '请开启手机定位服务并授权，根据填报要求，需要获取您的位置',
              showCancel: true,
              cancelText: '取消',
              confirmText: '去授权',
              success: function(res) {
                if (res.confirm) {
                  wx.openSetting({
                    success(res) {
                      console.log(res)
                    }
                  })
                }
              },
            })
          }
        })
      },
    changeTime(e) {
       this.setData({
           last_time: e.detail.value
       })
    },
    changeTemp(e) {
        console.log(e);
    },
    changeGreen(e) {
       let index = e.detail.value - 0
       let choose = this.data.isStay[index]
        this.setData({
        is_green: choose
      })
    },
    changeStay(e) {
        let index = e.detail.value - 0
       let choose = this.data.isStay[index]
        this.setData({
        is_stay: choose
      })
    },
    submit(){
        let { temp,is_stay,location, is_green,last_time } = this.data
        console.log(this.data);
        if(temp &&  is_stay && is_green && location && last_time) {
            let inform = {
                temp:temp,
                is_stay: is_stay,
                is_green: is_green,
                location: location,
                last_time: last_time
            }
            util.request(api.play,{inform: inform},'POST').then(res=>{
                wx.showToast({
                    title: '打卡成功',
                    icon: '',
                    time: 2000
                  })
                  setTimeout(() => {
                      wx.switchTab({
                        url: '../index/index',
                      })
                  }, 2000);
            }).catch(err=>{
                console.log(err);
            })
            return
          }else{
          wx.showToast({
            title: '信息未填写完全',
            icon: 'none'
          })
        }
        }
})