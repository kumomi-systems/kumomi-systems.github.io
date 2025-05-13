<script setup>
  import { get_logo } from "@/scripts/theming.js";

  defineProps({
    name: {
      type: String
    },
    repo: {
      type: String
    },
    tags: {
      type: Object
    },
    people: {
      type: Object
    },
    description_brief: {
      type: String
    },
    photo: {
      type: String,
    }
  })
</script>

<template>
  <div class="project">
    <div class="project-photo">
      <img v-if="photo" :src="photo" height="250em"/>
      <img v-else :src="get_logo()" height="250em"/>
    </div>
    <div class="project-about">
      <div class="project-label monospace">
        <router-link class="project-name" :to="`/projects/${name}`">{{ name }}</router-link>
        <div class="project-tags">
          [
          <span v-for="tag in tags.slice(0,5)">
            <span v-if="tags[tags.slice(0,5).length-1] != tag">
              {{ tag }},
            </span>
            <span v-else>
              {{ tag }}
            </span>
          </span>
          ]
        </div>
      </div>
      <hr>
      <br>
      <span class="project-description" v-if="description_brief">
        {{ description_brief }}
      </span>
      <div class="project-people monospace" v-if="people">
        [
          <span v-for="person in people.slice(0,5)">
            <router-link v-if="people[people.slice(0,5).length-1] != person" :to="`/people#${person}`">
              {{ person }},
            </router-link>
            <router-link v-else :to="`/people#${person}`">
              {{ person }}
            </router-link>
          </span>
          ]
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .project {
    display: flex;
    flex: 1;

    .project-photo>img {
      border-radius: 20%;
    }

    .project-about {
      position: relative;
      width: 100%;
      padding: 2em;

      .project-label {
        display: flex;
        justify-content: space-between;
        font-size: 1.75em;

        .project-name {
          font-weight: 900;
          float: left;
        }

        .project-tags {
          float: right;
        }
      }

      .project-description {
        font-style: italic;
      }

      .project-people {
        position: absolute;
        bottom: 1em;
      }
    }
  }
</style>