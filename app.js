//app.js
App({
  onLaunch () {
    this.setBadge();
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: res => {
        
    }
  })
  },
  userifo: wx.getStorageSync("user-ifo"),
  cart: wx.getStorageSync("mall-List") || [],
  historylist: wx.getStorageSync("history-list") || [],
  historycount: wx.getStorageSync("history-list").length || 0,
  addToCart(item){
    const isInCart = this.cart.some(cartItem => cartItem.id === item.id);
    if(isInCart){
      this.cart = this.cart.map( goods => {
        if(goods.id === item.id){
          console.log(goods.count,item.count)
          goods.count = goods.count+item.count;
          console.log(goods.count)
        }
        return goods;
      })
    }else{
      this.cart.push({...item})
    }
    wx.setStorageSync('mall-List', this.cart)
    this.setBadge();
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1200
    })
  },
  setUserifo(e){
    console.log(e)
    wx.setStorageSync('user-ifo', e.detail.userInfo)
    this.userifo = e.detail.userInfo
  },
  setHistory(history){ 
    // console.log(this.historylist)
    this.historylist = this.historylist.filter(goods => {
      return goods.id !== history.id ;
    });  
    this.historylist.unshift({...history})
    this.historycount = this.historylist.length,   
    // console.log(this.historycount)  
    wx.setStorageSync('history-list', this.historylist)
  },
  addToCount(id) {
    // console.log(id)
      this.cart = this.cart.map(goods => {
        if (goods.id === id) {
          goods.count++;
        }
        return goods;
      })
    wx.setStorageSync('mall-List', this.cart)
    this.setBadge()
  },
  reduceToCount(id) {
    // console.log(id)
    this.cart = this.cart.map(goods => {
      if(goods.count === 1){
        return goods
      }
      if (goods.id === id) {
        goods.count--;
      }
      return goods;
    })
    wx.setStorageSync('mall-List', this.cart)
    this.setBadge()
  },
  setBadge(){
    const total = this.cart.reduce((result,item) => {
      result += item.count;
      return result;
    },0)
    wx.setTabBarBadge({
      index: 2,
      text: `${total}`,
    })
  },
  remove() {
    this.cart = this.cart.filter(goods => {
      return goods.isChecked == false;
    });  
    this.setBadge()
    wx.setStorageSync('mall-List',this.cart)
  },
  globalData: {
    userInfo: null
  }
})


// // 展示本地存储能力
// var logs = wx.getStorageSync('logs') || []
// logs.unshift(Date.now())
// wx.setStorageSync('logs', logs)

// // 登录
// wx.login({
//   success: res => {
//     // 发送 res.code 到后台换取 openId, sessionKey, unionId
//   }
// })
// // 获取用户信息
// wx.getSetting({
//   success: res => {
//     if (res.authSetting['scope.userInfo']) {
//       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//       wx.getUserInfo({
//         success: res => {
//           // 可以将 res 发送给后台解码出 unionId
//           this.globalData.userInfo = res.userInfo

//           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//           // 所以此处加入 callback 以防止这种情况
//           if (this.userInfoReadyCallback) {
//             this.userInfoReadyCallback(res)
//           }
//         }
//       })
//     }
//   }
// })