<template>
  <div>
      <h3>插槽</h3>
      <span>内容</span>
      <slot name="one">
        <p>购物车</p>
      </slot>
      <div>
          <slot name="two"></slot>
      </div>

      
     
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>