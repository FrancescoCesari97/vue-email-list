const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      randomEmails: [],

      maxEmail: 10,
    };
  },

  methods: {
    printHello() {},
  },

  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((email) => {
          const mail = email.data.response;

          this.randomEmails.push(mail);
        });
    }
  },
});

app.mount("#root");
