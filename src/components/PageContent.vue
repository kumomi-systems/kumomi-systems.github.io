<template>
  <div class="page-content">
    <slot/>
  </div>
</template>

<style lang="scss">
  .page-content {
    opacity: 0;
    animation: fadeInUp 0.5s forwards 0.5s;
  }
</style>