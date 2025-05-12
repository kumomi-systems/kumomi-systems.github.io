<script setup lang="js">
  import Navbar from "./components/navbar/Navbar.vue";
  import Splash from "./components/Splash.vue";

  import { set_theme } from "./scripts/theming";
  set_theme();
</script>

<template>
  <div id="frame">
    <nav>
      <Navbar/>
    </nav>
    <main>
      <Splash/>
      <RouterView/>
    </main>
  </div>
</template>

<style lang="scss">
  div#frame {
    main {
      margin: 6em 10em 5em;
    }
  }
</style>