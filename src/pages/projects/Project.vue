<script setup lang="js">
  import Collapsible from "@/components/Collapsible.vue";
  
  import projects from "@/assets/data/projects.toml";
  
  import { useRoute, useRouter } from "vue-router";
  import { get_logo } from "@/scripts/theming.js";
  import MarkdownIt from "markdown-it";

  const route = useRoute();
  let project = projects[route.params.name];

  if (project == undefined) {
    useRouter().replace("/404")
  }
  project.name = route.params.name;

  project.description_long = MarkdownIt().render(project.description_long);
</script>

<template>
  <div id="project-title">
    <div id="project-card">
      <div id="project-photo">
        <img v-if="project.photo" :src="project.photo" height="250em"/>
        <img v-else :src="get_logo()" height="250em"/>
      </div>
      <div id="project-name">
        <div>
          <h1 class="monospace">{{ project.name }}</h1>
          <div>
            <a v-if="project.repo" :href="project.repo" target="_blank">Repository</a>
            <span v-if="project.repo && project.url">&nbsp;-&nbsp;</span>
            <a v-if="project.url"  :href="project.url"  target="_blank">Official Website</a>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
  <div id="project-content">
    <div id="project-description">
      <p>{{ project.description_brief }}</p>
      <p v-html="project.description_long"></p>
    </div>
    <hr>
    <div id="project-tags">
      <collapsible title="Tags">
        <ul class="monospace project-list">
          <li v-for="tag in project.tags">
            {{ tag }}
          </li>
        </ul>
      </collapsible>
    </div>
    <br>
    <div id="project-people">
      <collapsible title="People">
        <ul class="monospace project-list">
          <li v-for="person in project.people">
            <router-link :to="`/people#${person}`">
              {{ person }}
            </router-link>
          </li>
        </ul>
      </collapsible>
    </div>
  </div>
</template>

<style lang="scss">
  hr {
    margin: 2em 0em;
  }

  #project-title {
    animation: fadeInUp 0.5s;
  }

  #project-content {
    opacity: 0;
    animation: fadeInUp 0.5s forwards 0.5s;
  }

  #project-card {
    display: flex;
    flex: 1;
    
    #project-photo>img {
      border-radius: 20%;
    }

    #project-name {
      position: relative;
      width: 100%;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        h1 {
          font-size: 5em;
        }

        div {
          display: inline;
          
          a {
            font-style: italic;
          }
        }
      }
    }
  }

  ul.project-list {
    list-style: none;
    margin: 0em;
    padding-left: 1em;
    
    li {
      padding: 0.5em 0em;
    }
  }
</style>