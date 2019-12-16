// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"1707A",
    txt:'hello world',
    id:1,
    grade:78,
    flag:false,
    arr:[
      {
        name:'小花',
        age:18
      },
      {
        name: '小黑',
        age: 20
      },
      {
        name: '小兰',
        age: 11
      }
    ]
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
  goTorizhi(){
    console.log('日志');
    wx.switchTab({
      url: '/pages/logs/logs'
    })
  },
  goToDetail({ currentTarget}){
    console.log('详情', currentTarget);
    let {ind} = currentTarget.dataset;
    console.log(ind);
    let name = this.data.arr[ind].name;
    let age = this.data.arr[ind].age;
    wx.navigateTo({
      url: '/pages/detail/detail?name='+name+'&age='+age
    })
  }
})