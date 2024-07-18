const app = Vue.createApp({
  data() {
    // Data binding
    return {
      inputColor: "",
    };
  },
  methods: {},
  computed: {
    // computed datadaki değişikleri izler ve gerekli olan kısım değiştiği anda render eder
  },
  watch: {},
});

app.mount("#frontend");
