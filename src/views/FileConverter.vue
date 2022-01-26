<template>
  <v-container fluid>
    <v-file-input
      accept="image/*"
      label="File input!"
      filled
      prepend-icon="mdi-camera"
      @change="previewImg($event)"
      v-model="file"
    ></v-file-input>
    <v-btn rounded="lg" color="error" @click="this.file = null">
      Reset File
    </v-btn>
    <v-btn rounded="lg" color="primary" @click="conRev"> Send file </v-btn>
  </v-container>
</template>]<script>
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
        alert("您的裝置不支援圖片預覽功能，如需該功能請升級您的裝置！");
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

      this.$http.post("/api/file/", form, config).then((response) => {
       console.log(response.data)
      })
      .catch((err)=>console.log(err))
    },
  },
  name: "FileConverterView",
};
</script>
<style scoped>
</style>