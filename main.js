const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      randomNumber: null,
    };
  },

  methods: {
    printHello() {
      console.log("Hello Vue!");
    },
  },

  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((email) => {
        console.log(email);
      });
  },
});

app.mount("#root");
