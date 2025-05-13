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
    <div id="contact-line">
      Feel free to get in touch with us for issues, requests, or wanting to work with us.
    </div>
    <hr>
    <h2>
      <a href="https://github.com/kumomi-systems" target="_blank">
        Kumomi Systems on Github
      </a>
    </h2>
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
  #contact-line {
    padding: 1em 0;
  }

  ul {
    list-style: none;
  }
</style>