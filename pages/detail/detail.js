// pages/detail/detail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "11",
    brand: "HEA",
    img: "https://img.25miao.com/1730/7d51397b1c2c5765d1f76369db9cad76.jpg!w640",
    name: "HEA HEA&可口可乐收藏联名中国风印花短袖T恤",
    price: "999",
    total: "999",
    isChecked: "true",
    count: 1,
  },
  bindViewTap() {
    wx.switchTab({
      url: "../cart/cart"
    })
    app.setBadge();
  },
  addCount(){
    this.setData({
      count: this.data.count+1
    })
  },
  reduceCount(){
    if(this.data.count===1){
      return 
    }
    this.setData({
      count: this.data.count-1
    })
  },
  addToCart() {
    var item = this.data;
    app.addToCart(item)
    this.setData({
      count: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
   this.setData({
     id:options.id,
     name: options.name,
     price: options.price,
     brand: options.brand,
     img: options.img,
     total: options.total,
   })
     wx.hideLoading()
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