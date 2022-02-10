<template>
  <v-container>
    <h2>Photo Converter</h2>
    <v-file-input
      accept="image/*"
      label="Photo input!"
      filled
      prepend-icon="mdi-camera"
      @change="previewImg($event)"
      v-model="file"
    ></v-file-input>
   
    <v-btn rounded="lg" color="error" @click="this.file = null">
      Reset Photo
    </v-btn>
    <v-btn rounded="lg" color="primary" @click="conRev"> Send Photo </v-btn>
     <h4>Preview Photo</h4>
    <v-img v-bind:src="img"></v-img>
    <v-btn rounded="lg" color="success" @click="Download">Download Photo </v-btn>
  </v-container>
</template><script>
export default {
  data() {
    return {
      type: "",
      file: "",
      img: "",
    };
  },
  methods: {
    previewImg(e) {
      var files = e.target.files[0];
      var that = this;
      // 判斷瀏覽器是否支援 FileReader
      if (!e || !window.FileReader) {
        alert("您的裝置不支援圖片預覽功能，如需該功能請升級您的裝置!");
        return;
      }
      let reader = new FileReader();
      // 這裡是最關鍵的一步，轉換就在這裡
      if (files) {
        reader.readAsDataURL(files);
      }
      reader.onload = () => {
        that.photoSrc = this.result;
      };
      // 設定檔案
      this.img = files;
    },
    conRev() {
      // 判斷圖片是否有上傳，減輕後臺工作量
      var photo = this.img;
      // 資料轉換 FormData 形式
      var form = new FormData();
      form.append("photo", photo);

      //新增請求頭
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      // 傳送請求
      this.$http
        .post("/api/file/", form, config)
        .then((response) => {
          console.log(response.data);
          document.cookie = "filename=" + response.data.filename;
          console.log(document.cookie);
          alert("Upload Success");
        })
        .catch((err) => console.log(err));
    },
    Download() {
      this.$http.get("/api/file/")
      .then((res)=>{console.log(res)})
      .catch((err)=>console.log(err))

    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
  },
  name: "FileConverterView",
};
</script>
<style scoped>
</style>