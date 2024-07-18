const app = Vue.createApp({
  data() {
    // Data binding
    return {
      firstGoal: "Learn Vue",
      secondGoal: "Learn React",
      thirdGoal: "Learn Angular",
      htmlData: "<h1>HTML Data</h1>",
      website: "https://www.google.com",
    };
  },
  methods: {
    // Fonksiyonlarımızı methods içerisinde tanımlıyoruz
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.secondGoal; // this ile data içerisindeki verilere erişebiliriz
      } else {
        return this.thirdGoal; // this ile data içerisindeki verilere erişebiliriz
      }
    },
  },
});

app.mount("#frontend");
