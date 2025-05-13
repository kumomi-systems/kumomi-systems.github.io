<script setup lang="js">
  import { ref } from 'vue'
  
  defineProps({
    title: {
      type: String
    }
  });

  const collapsed = ref(true);

  function flipCollapse(title) {
    collapsed.value= !(collapsed.value);
    
    let target = document.getElementById(`${title}-collapsible-content`);
    target.style.maxHeight = (() => {
      if (collapsed.value) {
        return "0px";
      }
      else {
        return target.scrollHeight + "px";
      }
    })();
  }
</script>

<template>
  <div class="collapsible">
    <button @click="flipCollapse(title)">
      <div class="monospace">
        <div class="collapsible-icon">
          <div v-if="collapsed">+</div>
          <div v-else>-</div>
        </div>
        <span class="collapsible-title">{{ title }}</span>
      </div>
    </button>
    <div :id="`${title}-collapsible-content`" class="collapsible-content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
  .collapsible {
    button {
      background-color: transparent;
      border: none;
      color: var(--foreground);

      div {
        display: inline-block;

        font-size: 1.5vh;
        font-weight: bolder;

        .collapsible-icon {
          width: 2vmax;
        }
      }
    }

    .collapsible-content {
      max-height: 0;
      overflow: hidden;

      transition: max-height 0.25s ease-in-out;

      >:first-child {
        margin-left: 2vmax;
        padding: 0.5vmin 0 0.5vmin 1.5vmin;

        border-width: 0 0 0 0.1vmax;
        border-color: var(--foreground);
        border-style: solid;
      }
    }    
  }
</style>