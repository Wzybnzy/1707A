<template>
  <div>
        <Exam />
        <div>
            <span>{{ind+1}}</span>/<span>{{length}}</span>
        </div>
        <button @click="changeExamFn(ind-1)">上一题</button>
        <button @click="submit">提交</button>
        <button @click="changeExamFn(ind+1)" v-if="show">下一题</button>
  </div>
</template>

<script>
import Exam from '@/components/exam.vue'
import {mapActions,mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            show:true
        }
    },
    computed:{
        ...mapState(['ind','length'])
    },
    components:{
        Exam
    },
    created(){
        this.getList();
    },
    methods:{
        ...mapActions(['getList']),
        ...mapMutations(['changeExam']),
        changeExamFn(cur){
            console.log(cur,'cur^^^^^^^^^^^^^6');
            if(cur >= 0 && cur <= this.length -1){
                this.show = true;
                this.changeExam(cur);
            }

            if(cur == this.length -1){
                this.show = false;
            }
        },
        submit(){
            this.$router.push('/detail');
        }
    }
}
</script>

<style>

</style>