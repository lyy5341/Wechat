// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   *
   */
  data: {
    imgUrls: [
      'https://img.25miao.com/114/66f58ceeacae53f5267ac1bf0de68b81.jpg',
      'https://img.25miao.com/114/e20fccdc8cc27ecd4ebba14bc44266cc.jpg',
      'http://img.25miao.com/114/1508133845.jpg',
      'http://img.25miao.com/114/1482056604.jpg'
    ],
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://m.25boy.cn/ajax/get.picshow.list.php?posid=7&page=1&pagesize=10',
      success: (resp) => {
        console.log(resp.data)
        this.setData({
          Hot: resp.data
        })
      },
      fail: function (err) {
        console.log(err)
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

  }
})