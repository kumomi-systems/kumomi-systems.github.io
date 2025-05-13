<script setup>
  import person_blank from "@/assets/images/person_blank.png";

  defineProps({
    name: {
      type: String
    },
    position: {
      type: String
    },
    description: {
      type: String
    },
    projects: {
      type: Object
    },
    url: {
      type: String
    },
    photo: {
      type: String,
      default: person_blank
    }
  })
</script>

<template>
  <div class="person">
    <div class="person-photo">
      <img :src="photo"/>
    </div>
    <div class="person-about">
      <div class="person-label">
        <div class="person-name">
          <a v-if="url" :href="url" target="_blank">{{ name }}</a>
          <span v-else>{{ name }}</span>
        </div>
        <span class="person-position" v-if="position">{{ position }}</span>
      </div>
      <hr>
      <span class="person-description" v-if="description">
        {{ description }}
      </span>
      <br>
      <br>
      <div class="person-projects monospace" v-if="projects">
        [
          <span v-for="project in projects.slice(0,5)">
            <router-link v-if="projects[projects.slice(0,5).length-1] != project" :to="`projects/${project}`">
              {{ project }},
            </router-link>
            <router-link v-else :to="`projects/${project}`">
              {{ project }}
            </router-link>
          </span>
          ]
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .person {
    display: flex;
    flex: 1;

    .person-photo {
      >img {
        border-radius: 20%;
        height: 10vmax;
      }
    }

    .person-about {
      position: relative;
      width: 100%;
      padding: 5vmin;

      .person-label {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .person-name {
          font-weight: 900;
          float: left;
          font-size: 2.5vmax;
        }

        .person-position {
          float: right;
          font-size: 2vmax;
        }
      }

      .person-description {
        font-style: italic;
      }
    }
  }
</style>