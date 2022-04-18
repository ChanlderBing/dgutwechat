// pages/personal/personal.js
const util =  require('../../utils/util')
const api  = require('../../config/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
      applyList:[],
      pageNum:0, // 页码，第一页
	    businessList:[],  // 列表数据
      allHeight:null, // 整个屏幕高度（包含不可见区域）
      clientHight:null, // 可见区域屏幕高度，不包含滚动条折叠不可见区域
      isMore:false,  // 加载中
      noMore:false,  // 没有更多了
      gap:null,   // 第二次后者更后面计算整个高度的时候（包含不可见区域）会有误差，需要加上这个误差
      num:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.getSystemInfo({
        success: function(res) {
         that.setData({
           clientHight:res.windowHeight
         })
       },
     })
      
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
      if (wx.getStorageSync('token')) {
        util.request(api.applyCheck).then(res =>{
          if (res.errno === 0) {
            if (res.data.data.length > 0) {
              res.data.data.forEach(item=>{
                return item.applyTime = util.formatTime(new Date(parseInt(item.applyTime)*1000))})
              this.setData({
                applyList: res.data.data
              })
            }
          }
        })
      }

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
      console.log(113333);
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      console.log(113333);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    gotoSchoolOut(){
        wx.navigateTo({
          url: '../schoolOut/schoolOut',
        })
    }
})