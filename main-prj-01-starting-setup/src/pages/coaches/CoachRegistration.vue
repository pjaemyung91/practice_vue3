<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // this.$router.push('/coaches'); // 이동 후에 이전 페이지로 돌아갈 수 있음.
      this.$router.replace('/coaches'); // 이동 후에 이전 페이지로 돌아갈 수 없음.
    }
  }
};
</script>
