// pages/mallList/mallList.js
import ajax from '../../utils/request.js'
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    cid: 23,
    Tshirt: [],
    page: 1,
  },
  toDatail(e) {
    // console.log(e)
    var {
      id,
      brand,
      name,
      price,
      img,
      total,
    } = e.currentTarget.dataset;
    var hisroty = {
      id,
      brand,
      name,
      price,
      img,
      total,
    }
    app.setHistory(hisroty)
    name = name.split("&").join("")
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&brand=${brand}&price=${price}&img=${img}&name=${name}&total=${total}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  loadMore() {
    this.loadList()
  },
  refreshList() {
    this.setData({
      page: 1
    }, () => {
      this.loadList()
    })
  },
  loadList() {
    ajax.get(`/ajax/get.product.list.php?pagesize=8&page=${this.data.page}&cid=${this.data.cid}&default=1&click=0&sale=0&price=0&new=0&start_price=0&end_price=0&brand=0&brand_id=0&k=`)
      .then(resp => {
        this.setData({
          Tshirt: this.data.Tshirt.concat(resp.data),
          page:this.data.page + 1,
        })
      })
      .catch(error => {
        console.log(error)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      cid: options.cid
    })
    this.loadList()
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