// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    ind:0,
    target:'',
    scrollH:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://192.168.0.108:8000/shop.json',
      success:(res)=>{
        console.log(res);
        this.setData({list:res.data.goods},()=>{
          const query = wx.createSelectorQuery();
          query.selectAll('.rightlist').boundingClientRect( (rects)=> {
            console.log(rects,'******');
            let last = rects[rects.length -1];
            this.setData({
              scrollH: rects.map(item => item.top).concat(last.top + last.height)
              })
          }).exec()
        });
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
  changeTap({currentTarget}){
    console.log(currentTarget);
    let {ind} = currentTarget.dataset;
    this.setData({ind,target:'title'+ind})
  },
  scroll({detail}){
    let {scrollTop} = detail;
    let {scrollH} = this.data;
    scrollH.forEach((item,index) =>{
      if(scrollTop > item && scrollTop <= scrollH[index+1]){
        this.setData({ind:index})
      }
    })
    console.log(scrollTop);
  }
})