// pages/qrcodeShow/qrcodeShow.js
const drawQrcode = require('../../utils/weapp.qrcode.js')
const api = require('../../config/api')
const util = require('../../utils/util')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        way:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.draw(options.id)
        util.request(api.qrcodeExprieCheck,{qrcodeId:options.id}).then(res =>{
            if (res.errno === 0) {
                if (res.data.isGo === '1') {
                    this.setData({
                        'way': 'qrcodeDsy'
                    })
                } else if (res.data.isGo === '2') {
                    this.setData({
                         'way': 'qrcodeEnd'
                    })
                }
            }
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
    draw(qrcodeId) {
        drawQrcode({
            width: 200,
            height: 200,
            canvasId: 'myQrcode',
            // ctx: wx.createCanvasContext('myQrcode'),
            text: `http://192.168.1.7:8360/api/auth/${this.data.way}?qrcodeId=${qrcodeId}`,
        })
    }
})