<script setup lang="js">
import PageContent from '@/components/PageContent.vue';
import PageTitle from '@/components/PageTitle.vue';

  let emails = [
    "johann@somecollagist.com"
  ]
</script>

<template>
  <PageTitle title="Contact"/>
  <PageContent>
    <h2>
      Email
    </h2>
    <ul>
      <li v-for="email in emails">
        <a :href="`mailto:${email}`" target="_blank">{{ email }}</a>
      </li>
    </ul>
  </PageContent>
</template>

<style>
  ul {
    list-style: none;
  }
</style>