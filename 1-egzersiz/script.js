const app = Vue.createApp({
  data() {
    // Data binding
    return {
      name: "Kaan",
      age: 25,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      inputValue: "kaan",
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
