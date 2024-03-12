<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!this.results || this.results.length === 0)">
        No stored experiences found. Start adding some survey results first.
      </p>
      <!-- <ul v-else-if="!isLoading && this.results && this.results.length > 0"> -->
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(`http://localhost:8090/vue-test/experiences`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem('Authorization'),
        },
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          this.isLoading = false;
          console.log(data);
          this.results = JSON.parse(data);
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - Please try again later.';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
