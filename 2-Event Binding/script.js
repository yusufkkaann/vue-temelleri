const app = Vue.createApp({
  data() {
    // Data binding
    return {
      count: 0,
    };
  },
  methods: {
    // Fonksiyonlarımızı methods içerisinde tanımlıyoruz
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
});

app.mount("#frontend");
