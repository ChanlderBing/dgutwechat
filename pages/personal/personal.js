// pages/personal/personal.js
const util =  require('../../utils/util')
const api  = require('../../config/api')
const { apply } = require('../../config/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
      applyList:[],
      pageNum:1, // 页码，第一页
	    businessList:[],  // 列表数据
      allHeight:null, // 整个屏幕高度（包含不可见区域）
      clientHight:null, // 可见区域屏幕高度，不包含滚动条折叠不可见区域
      isMore:false,  // 加载中
      noMore:false,  // 没有更多了
      counting:0,
      counted: 0,
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
      if (wx.getStorageSync('token')) {
        util.request(api.applyCheck,{ page: 1 }).then(res =>{
          if (res.errno === 0) {
            if (res.data.data.length > 0) {
              res.data.data.forEach(item=>{
                return item.applyTime = util.formatTime(new Date(parseInt(item.applyTime)*1000))})
              this.setData({
                applyList: res.data.data,
                counting: res.data.counting,
                counted: res.data.counted
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
      // console.log(113333);
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      let page = this.data.pageNum + 1
      let applyList = this.data.applyList
      if (!this.data.noMore) {
        this.setData({
          isMore: true
        })
        setTimeout(() => {
          util.request(api.applyCheck,{ page:page }).then(res =>{
            if (res.errno === 0) {
              if (res.data.data.length > 0) {
                res.data.data.forEach(item=>{
                  return item.applyTime = util.formatTime(new Date(parseInt(item.applyTime)*1000))})
                this.setData({
                  applyList: [...applyList,...res.data.data],
                  pageNum: page,
                  isMore: false,
                  counting: res.data.counting,
                  counted: res.data.counted
                })
              }else {
                this.setData({
                  noMore: true,
                  isMore: false
                })
              }
            }
        })
        }, 2000);
      }
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
    },
    gotoCode(event) {
      let id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../qrcodeShow/qrcodeShow?id=' + id,
      })
    },
    gotoDetail(){
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
})