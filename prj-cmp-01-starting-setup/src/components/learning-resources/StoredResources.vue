<template>
    <ul>
    <learning-resource
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></learning-resource>
    <!-- <li v-for="resource in storedResources" :key="resource.id">
      {{ resource.title }}
    </li> -->
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue'

export default {
  // props: ['resources'],
  inject: ['resources'],
  components: {
    LearningResource
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
