<template>
  <div class="home">
   <button @click="goToLogin">点击开始</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    goToLogin(){
      this.$router.push('/login');
    }
  }
}
</script>
