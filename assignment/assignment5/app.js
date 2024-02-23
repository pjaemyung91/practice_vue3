const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      tasks: [],
      taskListIsVisible: true,
    };
  },
  computed: {
    visibleClasses() {
      return {
        visible: this.taskListIsVisible,
        hidden: !this.taskListIsVisible,
      };
    },
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
    },
    toggleVisibility() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount('#assignment');