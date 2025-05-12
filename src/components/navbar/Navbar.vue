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
</template>

<style lang="scss">
  $navbar_height: 2em;

  #navbar {
    position: absolute;
    top: 1em;
    left: 50%;
    height: $navbar_height;
    transform: translateX(-50%);
    width: calc(100% - 4em);
    font-size: 1.5em;

    * {
      animation: fadeInDown 0.5s;
    }

    ul {
      list-style: none;
      margin: 0em;
      vertical-align: middle;
      
      li {
        float: right;
        margin: 0em 1em;
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
</style>