// pages/record/record.js
const util =  require('../../utils/util')
const api  = require('../../config/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        record:[]
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
        util.get(api.playRecord).then(res=>{
            if (res.errno === 0) {
                res.data.forEach(item=>{
                    return item.play_time = util.formatTime(new Date(parseInt(item.play_time)*1000))})
                this.setData({
                    record: res.data,
                })
            }
        })
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

    }
})