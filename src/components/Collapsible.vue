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
          <div v-if="collapsed">▼</div>
          <div v-else>▲</div>
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
        display: inline;

        font-size: 1.25em;
        font-weight: bolder;

        .collapsible-icon {
          margin-right: 1em;
        }
      }
    }

    .collapsible-content {
      max-height: 0px;
      overflow: hidden;

      transition: max-height 0.25s ease-in-out;

      >:first-child {
        margin-left: 0.7em;
        padding: 0.5em 0em 0.5em 1.5em;

        border-width: 0em 0em 0em 0.1em;
        border-color: var(--foreground);
        border-style: solid;
      }
    }    
  }
</style>