const app = Vue.createApp({
  data() {
    // Data binding
    return {
      firstBox: false,
      secondBox: false,
      thirdBox: false,
    };
  },
  methods: {
    clickBox(num) {
      if (num == "1") {
        this.firstBox = true;
      } else if (num == "2") {
        this.secondBox = true;
      } else if (num == "3") {
        this.thirdBox = true;
      }
    },
  },
  computed: {
    // computed datadaki değişikleri izler ve gerekli olan kısım değiştiği anda render eder
    boxOneSelected() {
      return { selected: this.firstBox };
    },
  },
  watch: {},
});

app.mount("#frontend");
