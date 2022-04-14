// pages/schoolOut/schoolOut.js
const api = require('../../config/api')
const util = require('../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        setForm:{
            nickname: '',
            goTime:'',
            backTime: '',
            canGo: 0,
        },
        reason: '',
        passReason:'',
        buttonSwith: 0,
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
        if (wx.getStorageSync('userInfo')) {
            this.setData({
                'setForm.nickname': wx.getStorageSync('userInfo').nickName,
            })
            if (wx.getStorageSync('qrcodeId')) {
                util.request(api.qrcodeCheck,{qrcodeId:wx.getStorageSync('qrcodeId')}).then(res=>{
                    if (res.errno === 0 && res.data.canGo === '1') {
                        this.setData({
                            buttonSwith: 5
                        })
                    }
                })   
            }
        } else {
            // wx.showModal
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
    changeGoTime(e) {
        this.setData({
            'setForm.goTime': e.detail.value
        })
     },
     changeBackTime(e){
        this.setData({
            'setForm.backTime': e.detail.value
        })
     },
     switchcode(){
         wx.navigateTo({
           url: '../qrcodeShow/qrcodeShow?id=' + wx.getStorageSync('qrcodeId'),
         })
     },
     Textinput: function(){
     },
     getPassReason() {
         util.request(api.SchoolOutInformCheck).then(res =>{
             if (res.errno === 0) {
                 this.setData({
                     passReason: '              满足申请出校条件',
                     buttonSwith: 1
                 })
             }else {
                this.setData({
                    passReason: '              未满足申请出校条件',
                    buttonSwith: 2
                })
             }
         })
     },
     submit() {
         if (this.data.setForm.backTime && this.data.setForm.goTime && this.data.reason) {
            if (this.data.buttonSwith === 1) {
                this.setData({
                    'setForm.canGo': 2,
                    'setForm.reason': this.data.reason,
                    'buttonSwith': 3
                })
                util.request(api.apply,{setForm: this.data.setForm},'POST').then(res => {
                    if (res.errno === 0) {
                        return res.data
                    }
                }).then(res=>{
                    let qrcodeId = res 
                    util.request(api.qrcode,{id: res}).then(res =>{
                       if (res.errno === 0) {
                        wx.setStorageSync('qrcodeId',qrcodeId)
                           wx.navigateTo({
                             url: '../qrcodeShow/qrcodeShow?id=' + qrcodeId,
                           })
                       }
                   })
               })  
            } else  {
                this.setData({
                    'setForm.reason': this.data.reason,
                    'buttonSwith': 4
                })
                util.request(api.apply,{setForm: this.data.setForm},'POST').then(res => {
                    if (res.errno === 0) {
                        wx.setStorageSync('qrcodeId',res.data)
                    }
                })
            }
        } else {
            wx.showToast({
              title: '申请条件不完整',
              icon:'error'
            })
        }    
    },
    submit2(){
        const qrcodeId = wx.getStorageSync('qrcodeId')
        util.request(api.qrcode,{id: qrcodeId}).then(res =>{
            if (res.errno === 0) {
                this.setData({
                    'buttonSwith': 3
                })
                wx.navigateTo({
                  url: '../qrcodeShow/qrcodeShow?id=' + qrcodeId,
                })
            }
        })
    }
})