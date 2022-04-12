// pages/schoolOut/schoolOut.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        setForm:{
            nickname: '',
            schoolId: '',
            goTime:'',
            backTime: '',
            reason: '',
            isAuto: 0,
            isGo: 0,
            IsBack: 0,
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (wx.getStorageSync('userInfo')) {
            this.setData({
                'setForm.nickname': wx.getStorageSync('userInfo').nickName,
            })
        } else {
            
        }

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

    }
})