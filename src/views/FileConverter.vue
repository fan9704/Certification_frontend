<template>
  <v-container fluid>
    <v-file-input
      accept="image/*"
      label="File input!"
      filled
      prepend-icon="mdi-camera"
      v-model="file"
    ></v-file-input>
        <v-btn
      rounded="lg"
      color="error"
      @click="this.file=null"
    >
     Reset File
    </v-btn>    <v-btn
      rounded="lg"
      color="primary"
      @click="sendfile"
    >
    Send file
    </v-btn>
  </v-container>
</template>]<script>
export default {
  data() {
    return {
        type:'',
        file:'',
    };
  },
  methods: {
      sendfile(){
          let url="api/file/";
          let config={
              file:this.file,
              type:this.type
          };
          console.log(this.file)
          this.axios.post(url,config)
          .then((res)=>{console.log(res.data)})
          .catch((err)=>console.log(err))
      }
  },
  name: "FileConverterView",
};
</script>
<style scoped>
</style>