// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {
        name:'全部',
        type:'all'
      },
      {
        name: '待办',
        type: false
      },
      {
        name: '完成',
        type: true
      }
    ],
    ind:0,
    val:'',
    count:0,
    list:[],
    newlist:[]
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
  changeInput({detail}){
    let {value} = detail;
    this.setData({val:value});
  },
  submit(){ //点击按钮
    let {val,list} = this.data;
    console.log(val);
    list.push({
      val,
      check:false,
      id:new Date().getTime()
      });
    this.setData({list,newlist:list,count:this.getcount(list)})
  },
  changeInd({currentTarget}){ //点击tab
    let {ind,type} = currentTarget.dataset; //获取参数
    //筛选
    let { list, newlist} = this.data;
    newlist = type == 'all' ? list : list.filter(item => item.check == type);
    
    this.setData({ind,newlist});
  }, 
  getcount(list){ //获取最新count
    return list.filter(item => item.check == false).length;
  },
  checkboxChange({detail}){
    let {value} = detail;
    console.log(value);
    let {newlist} = this.data;
    newlist.forEach(item => item.check = value.includes(`${item.id}`))
    this.setData({newlist,count:this.getcount(newlist)})
  }
})