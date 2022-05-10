const { SchoolInformCheck } = require("../../config/api");
const util = require("../../utils/util")

const app = getApp()
// const db = wx.cloud.database()
// const tmpId = 'XWI3rT3Sfi6fdjZ0YeHkwp_POCU_tmrOOr96tSsN_ks'
// const tmpIdt = 'E0u3PLO8OThB8pwGhwJn68ehfYzMcBltNjQPOoEAhYY'

// miniprogram/pages/checkin/checkin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    allClasses: [],
    checked: false,
    inform:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    util.request(SchoolInformCheck).then(res =>{
      if (res.errno === 0) {
        this.setData({
          inform: res.data
        })
      }
    }).catch(res =>{

    })
    // wx.showLoading({
    //   title: '正在加载',
    // })

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
      this.setData({
        checked: new Date().toLocaleDateString() != wx.getStorageSync('is_play') ? false :true
      }) 
    }else {
      this.setData({
        showModal: true
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
  showGroup(e) {
    console.log(e.currentTarget.dataset)
    let { class_, department } = e.currentTarget.dataset
    if(!class_) {
      class_=''
    }
    if(!department) {
      department=''
    }
    wx.navigateTo({
      url: `../group/group?class_=${class_}&department=${department}`,
    })
  },
  
  // changeClass(){
  //   // console.log('ss')
  //   wx.navigateTo({
  //     url: '/pages/myClasses/myClasses'
  //   })
  // },
  hideModal() {
    this.setData({ showModal: false })
  },
  navToMyInfo() {
   wx.switchTab({
     url: '../me/me',
   })
    this.hideModal()
  },


      // 订阅消息


  // 订阅消息
  // getMessage(res){
  //   wx.navigateToMiniProgram({
  //     appId: 'wx47c1fa6cacac377e',
  //   })
  // }
  checkin() {
    if (this.data.checked) {
      wx.showToast({
        title: '今日打卡已完成',
      })
    }else{
    wx.navigateTo({
      url: '../inform/inform',
    })
  }
  }
})