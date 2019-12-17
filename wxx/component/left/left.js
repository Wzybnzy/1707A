// component/left/left.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    },
    ind:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTap({ currentTarget}){
      let {ind} = currentTarget.dataset;
      this.triggerEvent('changeInd',{ind});
      // this.$emit('changeInd',ind);
    }
  }
})
