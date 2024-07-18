const app = Vue.createApp({
  data() {
    // Data binding
    return {
      count: 0,
    };
  },
  methods: {
    // Fonksiyonlarımızı methods içerisinde tanımlıyoruz
    increase(number) {
      this.count = this.count + number;
    },
    decrease(number) {
      this.count = this.count - number;
    },
  },
});

app.mount("#frontend");
