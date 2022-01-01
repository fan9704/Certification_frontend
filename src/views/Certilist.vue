<template>
  <v-container>
    <h2>Certification List</h2>
    <v-row>
      <v-col cols="12" class="d-flex">
        <!-- <v-select :items="option" label="Option" outlined /> -->
        <select
          name="type"
          id="type"
          v-model="select_option"
          @change="list_number"
        >
          <option value="All" selected disabled>Please Select Number</option>
          <option v-bind:value="opt" :key="opt" v-for="opt in option">
            {{ opt }}
          </option>
        </select></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="2">ID</v-col>
      <v-col cols="10" sm="4"> Certification Name </v-col> </v-row
    >
    <v-row :key="index" v-for="(cert, index) in certs">
      <v-col cols="2">{{ index + 1 + (page - 1) * select_option }}</v-col>
      <v-col cols="10" sm="4">
        {{ cert.name }}
      </v-col>
    </v-row>
  </v-container>
  <!-- Pagination -->
  <div class="text-center">
    <v-pagination
      v-on:click="list_number"
      v-model="page"
      :length="this.datanumber / this.select_option"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  name: "Certilist",
  data() {
    return {
      certs: [],
      option: [20, 50, 100],
      select_option: 20,
      datanumber: 100,
      page: 1,
    };
  },
  methods: {
    list_number() {
      let url = "/api/certifications/";
      this.axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.certs = res.data.slice(
            (this.page - 1) * this.select_option,
            this.page * this.select_option
          );
        })
        .catch((error) => console.log(error));
    },
  },
  beforeMount() {
    let url = "/api/certifications/";
    this.axios
      .get(url)
      .then((res) => {
        this.datanumber = res.data.length;
        this.certs = res.data.splice(0, 0 + this.select_option);
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style scoped>
select {
  padding: 0px 50px;
  width: 30%;
  background: #aaa;
}
option {
  background: #fff;
}
</style>