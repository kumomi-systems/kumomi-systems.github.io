<script setup lang="js">
  import { get_logo } from '@/scripts/theming';
  
  let icon = get_logo();
</script>

<template>
  <div id="navbar" :key="$route.path">
    <ul>
      <li id="navbar-home">
        <router-link to="/about">
          <img :src="icon"/>
        </router-link>
      </li>
      <li id="navbar-support">
        <router-link to="/support">
          Support
        </router-link>
      </li>
      <li id="navbar-contact">
        <router-link to="/contact">
          Contact
        </router-link>
      </li>
      <li id="navbar-projects">
        <router-link to="/projects">
          Projects
        </router-link>
      </li>
      <li id="navbar-people">
        <router-link to="/people">
          People
        </router-link>
      </li>
    </ul>
  </div>
  <div id="navbar-blur"/>
</template>

<style lang="scss">
  $navbar_height: 5vmin;

  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 2vmin);
    padding: 1vmin 1vmin 0vmin;

    font-size: 1.5vmax;
    background-color: var(--background);
    z-index: 1;

    * {
      animation: fadeInDown 0.5s;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      vertical-align: middle;
      
      li {
        float: right;
        margin: 0 1vmax;
        height: $navbar_height;
        line-height: $navbar_height;
      }

      li#navbar-home {
        float: left;
        img {
          height: $navbar_height;
          width: $navbar_height;
        }
      }
    }
  }

  #navbar-blur {
    position: fixed;
    top: calc($navbar_height + 1vmin);
    left: 0;
    width: 100%;
    height: 5vmin;
    z-index: 1;
    background-image: linear-gradient(
      to bottom,
      var(--background),
      #00000000
    );
  }
</style>