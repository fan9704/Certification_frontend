<template>
  <v-container class="messagebox">
    <h2>Chatroom!</h2>
    <v-row :key="index" v-for="(msg, index) in msgs">
      <v-col fluid>
        <v-btn rounded="pill" color="primary" data-aos="zoom-in-right">
          {{ msg.message }}
        </v-btn></v-col
      >
    </v-row>
  </v-container>
  <v-container class="textbox">
    <v-row>
      <v-col cols="8" md="8">
        <v-text-field
          v-model="user_message"
          :counter="255"
          label="Message!"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="4" md="4">
        <v-btn
          prepend-icon="mdi-message-text-outline"
          color="primary"
          class="mr-4"
          @click="send_message"
        >
          Send Message
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user_message: "",
      msgs: [],
    };
  },
  methods: {
    send_message() {
      let config = {
        user: this.$store.state.user,
        message: this.user_message,
      };
      let url = "/api/message/";
      console.log(config)
      this.axios
        .post(url, config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    },
  },
  beforeMount() {
    let url = "/api/message/";
    this.axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.msgs = res.data;
      })
      .catch((error) => console.log(error));
  },
  name: "ChatroomView",
};
</script>
<style scope>
.messagebox {
  height: 80vh;
}
.textbox {
  height: 15vh;
}
</style>