// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['http://file02.16sucai.com/d/file/2014/0829/372edfeb74c3119b666237bd4af92be5.jpg', 'http://g.hiphotos.baidu.com/zhidao/pic/item/c83d70cf3bc79f3d6e7bf85db8a1cd11738b29c0.jpg','http://file02.16sucai.com/d/file/2014/1006/e94e4f70870be76a018dff428306c5a3.jpg'],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    item1: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'FRA', value: '法国' },
    ],
    val:''
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

  },
  goToLog(){
    console.log('去日志');
    wx.switchTab({
      url: '/pages/logs/logs'
    })
  },
  goToDetail({currentTarget}){
    let { ind } = currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?ind='+ind,
    })
  },
  checkboxChange({detail}){
    let { value } = detail;
    console.log(value);
  },
  changeInput({detail}){
    let {value} = detail;
    console.log(value);
    this.setData({val:value})
  },
  changeButton(){
    console.log('dianji',this.data.val);;
  }
})