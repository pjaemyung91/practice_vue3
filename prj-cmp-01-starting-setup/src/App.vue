<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
  <!-- <stored-resources :resources="storedResources"></stored-resources> -->
</template>

<script>
// import LearningResource from './components/learning-resources/LearningResource.vue';
// import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    // LearningResource,
    // StoredResources,
    TheHeader,
    TheResources
  },
  // data() {
  //   return {
  //     storedResources: [
  //       {
  //         id: 'offcial-guide',
  //         title: 'Official Guide',
  //         description: 'The official Vue.js documentation.',
  //         link: 'https://vuejs.org',
  //       },
  //       {
  //         id: 'google',
  //         title: 'Google',
  //         description: 'Learn to google...',
  //         link: 'https://google.com',
  //       },
  //     ],
  //   };
  // },
  methods: {
    deleteResource(resourceId) {
      this.storedResources = this.storedResources.filter(resource => resource.id !== resourceId);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>