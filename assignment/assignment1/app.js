const app = Vue.createApp({
  data() {
    return {
      name: "Mr.Park",
      age: 34,
      imageUrl: "https://i.ytimg.com/vi/O4TC4dHBRxA/maxresdefault.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateNumber() {
      return Math.random();
    }
  }
})

app.mount('#assignment');