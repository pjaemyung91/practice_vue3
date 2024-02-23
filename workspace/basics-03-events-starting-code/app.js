const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(number) {
      this.counter = this.counter + number;
    },
    reduce(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount('#events');