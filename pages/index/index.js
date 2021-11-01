// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        li: [{
                id: 0,
                da: "张三",
                is: true,
            },
            {
                id: 1,
                da: "李四",
                is: false,
            },
            {
                id: 2,
                da: "赵五",
                is: false,
            }
        ],
    },
    change() {
        const list1 = [7, 8, 9, 10];
        this.setData({
            list: list1
        })
    },
    ItemChange(e) {
        const{index}=e.detail;
        let {
            li
        } = this.data;
        li.forEach((v, i) => i === index ? v.is = true : v.is = false);
        this.setData({
            li
        })
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

    }
})