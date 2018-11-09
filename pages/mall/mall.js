// pages/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cloUrls: [
      {
        img:"http://img.25miao.com/1048/1480234882.png!w200",
        cid: "23"
      },
      {
        img:"http://img.25miao.com/1048/1480234881.png!w200",
        cid: 54
      },
      {img:"http://img.25miao.com/1048/1480234928.png!w200",cid: 61},
      {img:"http://img.25miao.com/1048/1480234883.png!w200",cid: 24},
      {img:"http://img.25miao.com/1048/1480234917.png!w200",cid: 25},
      {img:"http://img.25miao.com/1048/1480234891.png!w200",cid: 26},
      {img:"http://img.25miao.com/1048/1480234887.png!w200",cid: 27},
      {img:"http://img.25miao.com/1048/1480234888.png!w200",cid: 32},
      {img:"http://img.25miao.com/1048/1480234915.png!w200",cid: 68},
   ],
    pantsUrls:[
    {img:"http://img.25miao.com/1048/1480234884.png!w200",cid: 35},
    {img:"http://img.25miao.com/1048/1480234909.png!w200",cid: 34}, 
    {img:"http://img.25miao.com/1048/1480234925.png!w200",cid: 33}, 
    {img:"http://img.25miao.com/1048/1480234921.png!w200",cid: 56}, 
    {img:"http://img.25miao.com/1048/1480234893.png!w200",cid: 55},
  ],
    accUrls:[
{img:"http://img.25miao.com/1048/1480234892.png!w200",cid: 45}, 
{img:"http://img.25miao.com/1048/1480234911.png!w200",cid: 64},               {img:"http://img.25miao.com/1048/1480234919.png!w200",cid: 47},  {img:"http://img.25miao.com/1048/1480234926.png!w200",cid: 42},  {img:"http://img.25miao.com/1048/1480234910.png!w200",cid: 41},  {img:"http://img.25miao.com/1048/1480234916.png!w200",cid: 52},  {img:"http://img.25miao.com/1048/1480234896.png!w200",cid: 58},  {img:"http://img.25miao.com/1048/1480234927.png!w200",cid: 62},  {img:"http://img.25miao.com/1048/1480234889.png!w200",cid: 65},  {img:"http://img.25miao.com/1048/1480234920.png!w200",cid: 66},  {img:"http://img.25miao.com/1048/1506073375.png!w200",cid: 72},
      ]
  },
  toList(e) {
    // console.log(e)
    var {
      cid
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url:`/pages/mallList/mallList?cid=${cid}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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