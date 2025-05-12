<script setup lang="js">
  defineProps({
    title: {
      type: String
    }
  })
</script>

<template>
  <div class="page-title">
    <h1>{{ title }}</h1>
    <hr>
  </div>
</template>

<style lang="scss">
  .page-title {
    animation: fadeInUp 0.5s;
  }
</style>