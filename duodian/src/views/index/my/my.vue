<template>
  <div>
    <Test>
      <template v-slot:one>
        <span>-</span>
        <span>10</span>
        <span>+</span>
      </template>
      <template v-slot:two="obj">
          <h3 >1707A</h3>
      </template>
    </Test>
  </div>
</template>

<script>
import Test from "@/components/test";
export default {
  components: {
    Test
  }
};
</script>

<style>
</style>