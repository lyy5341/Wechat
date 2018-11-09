// pages/cart/cart.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    List: [],
    isAllChecked: true,
    totalPrice: 0
  },
  isAllChecked: wx.getStorageSync("isAllChecked") || true,
  allChecked(){
    if (this.data.isAllChecked === true) {
      this.cart = app.cart.map(goods => {
        goods.isChecked = false;
        return goods;
      })
      this.setData({
          isAllChecked: false
        }) 
    }else{
      this.cart = app.cart.map(goods => {
        goods.isChecked = true;
        return goods;
      })
      this.setData({
        isAllChecked: true
      })
    }
    wx.setStorageSync('mall-List', this.cart)
    wx.setStorageSync('isAllChecked', [this.data.isAllChecked])
    this.contentTotalPrice()
    this.setData({
      List: app.cart
    })
  },
  clickChecked(e){
    this.cart = app.cart.map(goods => {
      if (goods.id === e.currentTarget.dataset.id){ 
        if (goods.isChecked){
          goods.isChecked = false;
        }else{
          goods.isChecked = true;
        }
      }
      return goods;
    })
    const isC = !this.cart.some(goods => {
      return goods.isChecked == false
    })
    if(isC){
      this.setData({
        isAllChecked: true
      })
    }else{
      this.setData({
        isAllChecked: false
      })
    }
    wx.setStorageSync('isAllChecked', [this.data.isAllChecked])
    wx.setStorageSync('mall-List', this.cart)
    this.contentTotalPrice()
    this.setData({
      List: app.cart
    })
  },
  contentTotalPrice(){
    const total = app.cart.reduce((result, item) => {
      if(item.isChecked){
      result += item.count*item.price;
        return result;
      }else{
        return result
      }
    }, 0)
    this.setData({
      totalPrice: total
    })
  },
  addCount(e){
    app.addToCount(e.currentTarget.dataset.id)
    this.setData({
      List: app.cart
    })
    this.contentTotalPrice()
  },
  reduceCount(e){
    app.reduceToCount(e.currentTarget.dataset.id)
    this.setData({
      List: app.cart
    })
    this.contentTotalPrice()
  },
  removeItem(){
    app.remove()
    this.contentTotalPrice()
    this.setData({
      List: app.cart,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isAllChecked: this.isAllChecked[0]
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
    this.setData({
      List: app.cart,
    })
    this.contentTotalPrice()
    app.setBadge()
    // console.log(this.data.List)
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