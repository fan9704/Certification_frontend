<template>
  <v-container class="messagebox">
    <h2>Chatroom!</h2>
  </v-container>
  <v-container class="textbox">
    <v-row>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="user_message"
          :counter="255"
          label="Message!"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn color="primary" class="mr-4" @click="send_message">
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
    };
  },
  methods: {
      send_message(){
          let config={
              username:this.$store.state.user,
              message:this.user_message
          }
          let url="/api/message/"
          this.axios.post(url,config)
          .then((res)=>{
              console.log(res.data)
          })
          .catch((error)=>console.log(error))
      }
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