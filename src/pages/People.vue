<script setup lang="js">
  import PageTitle from "@/components/PageTitle.vue";
  import Person from "@/components/people/Person.vue";

  import people from "@/assets/data/people.toml";
  import PageContent from "@/components/PageContent.vue";
</script>

<template>
  <PageTitle title="People"/>
  <PageContent>
    <ul class="people-list">
      <li v-for="personid in Object.keys(people)">
        <Person
          :id="personid"
          :name="people[personid].name"
          :position="people[personid].position"
          :description="people[personid].description"
          :projects="people[personid].projects"
          :url="people[personid].url"
          :photo="people[personid].photo"
        />
      </li>
    </ul>
  </PageContent>
</template>

<style lang="scss">
  ul.people-list {
    list-style: none;
    padding: 0;

    li {
      padding: 1vmin;
    }
  }
</style>