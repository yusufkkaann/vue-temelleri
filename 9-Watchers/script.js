const app = Vue.createApp({
  data() {
    // Data binding
    return {
      count: 0,
      name: "",
      user: {
        name: "",
        age: 25,
      },
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
    setName(event) {
      this.name = event.target.value;
    },
    reset() {
      this.name = "";
    },
    // fullName() {
    //   console.log("render fullname");
    //   if (this.name === "") {
    //     return "";
    //   }

    //   return this.name + " " + "Yücebilgiç";
    // },
  },
  computed: {
    // computed datadaki değişikleri izler ve gerekli olan kısım değiştiği anda render eder
    // Computed property
    fullNameComputed() {
      console.log("computed fullname");
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Yücebilgiç";
    },
  },
  watch: {
    //watcher datadaki değişiklikleri izler ve işlem yapar
    "user.name"(newValue, oldValue) {
      console.log(`User name changed from ${oldValue} to ${newValue}`);
    },
    count(event) {
      if (event > 50) {
        this.count = 0;
      }
    },
  },
});

app.mount("#frontend");
