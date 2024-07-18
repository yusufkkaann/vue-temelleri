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
    // Computed property
    fullNameComputed() {
      console.log("computed fullname");
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Yücebilgiç";
    },
  },
});

app.mount("#frontend");
