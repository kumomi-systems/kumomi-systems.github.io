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
      <img v-if="photo" :src="photo"/>
      <img v-else :src="get_logo()"/>
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
      <span class="project-description" v-if="description_brief">
        {{ description_brief }}
      </span>
      <br>
      <br>
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

    .project-photo {
      >img {
        border-radius: 20%;
        height: 10vmax;
      }
    }

    .project-about {
      position: relative;
      width: 100%;
      padding: 5vmin;

      .project-label {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .project-name {
          font-weight: 900;
          float: left;
          font-size: 2.5vmax;
        }

        .project-tags {
          float: right;
          font-size: 2vmax;
        }
      }

      .project-description {
        font-style: italic;
      }
    }
  }
</style>