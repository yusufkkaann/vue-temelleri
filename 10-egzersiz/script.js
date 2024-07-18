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
  computed: {
    // computed datadaki değişikleri izler ve gerekli olan kısım değiştiği anda render eder
    // Computed property
    result() {
      if (this.count < 25) {
        return "Değerin altındasınız.";
      } else if (this.count == 25) {
        return "Değeriniz 25";
      } else {
        return "Değerin üstündesiniz.";
      }
    },
  },
  // watch: {
  //   count(event) {
  //     if (event < 25) {
  //       this.message = "Değerin altındasınız.";
  //     } else {
  //       this.message = "Değerin üstündesiniz.";
  //     }
  //   },
  // },
});

app.mount("#frontend");
