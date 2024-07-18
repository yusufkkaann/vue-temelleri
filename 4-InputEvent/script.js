const app = Vue.createApp({
  data() {
    // Data binding
    return {
      count: 0,
      name: "",
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
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#frontend");
