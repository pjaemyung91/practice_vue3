<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your name" v-model="enteredName"/>
      <input type="text" placeholder="Your age" v-model="enteredAge"/>
      <button @click="setUserData">Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['set-user'],
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('set-user', this.enteredName, this.enteredAge);
    }
  }
}
</script>