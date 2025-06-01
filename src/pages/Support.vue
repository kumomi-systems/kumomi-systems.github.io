<script setup lang="js">
  import PageContent from '@/components/PageContent.vue';
  import PageTitle from '@/components/PageTitle.vue';
  import Coffee from '@/components/support/Coffee.vue';
</script>

<template>
  <PageTitle title="Support"/>
  <PageContent>
    <div id="support-frame">
      <p id="support-tagline">
      Making donations really helps us to work on the projects you love, so thank you for your generosity!
      </p>

      <div id="support-vectors">
        <Coffee/>
      </div>
    </div>
  </PageContent>
</template>

<style lang="scss">
  #support-frame {
    align-content: center;
  
    #support-tagline {
      font-weight: bold;
      font-size: large;
      text-align: center;
    }

    #support-vectors {
      display: flex;
      flex-direction: column;
      margin: 1.5vmin;
      align-items: center;
      * {
        margin: 0.5vmin 0;
      }
    }
  }
</style>