<script setup lang="js">
  import Project from "@/components/projects/Project.vue";

  import projects from "@/assets/data/projects.toml";
import PageTitle from "@/components/PageTitle.vue";
import PageContent from "@/components/PageContent.vue";
</script>

<template>
  <PageTitle title="Projects"/>
  <PageContent>
    <ul class="projects-list">
      <li v-for="projectid in Object.keys(projects)">
        <Project
          :id="projectid"
          :name="projectid"
          :repo="projects[projectid].repo"
          :tags="projects[projectid].tags"
          :people="projects[projectid].people"
          :description_brief="projects[projectid].description_brief"
          :photo="projects[projectid].photo"
        />
      </li>
    </ul>
  </PageContent>
</template>

<style lang="scss">
  ul.projects-list {
    list-style: none;
    padding: 0;

    li {
      padding: 1em;
    }
  }
</style>