<template>
  <div class="toast" v-if="show">{{msg}}</div>
</template>

<script>
export default {
    data(){
        return {
            msg:'添加成功',
            show:false
        }
    }
}
</script>

<style scoped>
.toast{
    height: 50px;
    width: 80%;
    background: rgba(0, 0, 0, 0.3);
    line-height: 50px;
    color: #fff;
    position: fixed;
    left: 10%;
    top: 50%;
    margin-top: -25px;
    text-align: center;
}
</style>