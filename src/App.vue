<template>
  <v-app >
    <v-layout style="overflow: hidden">
      <v-app-bar absolute color="deep-purple">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-white"
          >Certification Center</v-toolbar-title
        >
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
              prepend-icon="mdi-home"
              title="Home"
              to="/"
            ></v-list-item>
            <v-list-item
              v-if="logincheck"
              prepend-icon="mdi-account"
              title="Account setting"
              to="/account/setting"
            ></v-list-item>
            <v-list-item
              v-if="logincheck"
              prepend-icon="mdi-chat"
              title="Chatroom!"
              to="/chat"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-badge-account-horizontal-outline"
              title="Certification List"
              to="/certification/list"
            >
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-file-replace"
              title="File Converter"
              to="/file"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-graph"
              title="Graph"
              to="/graph"
            ></v-list-item>
            <v-list-item
              v-if="!logincheck"
              prepend-icon="mdi-account"
              title="Login/Register"
              to="/account/login"
            ></v-list-item>
            <v-list-item
              v-if="logincheck"
              prepend-icon="mdi-logout"
              title="Logout"
              v-on:click="logoutform = !logoutform"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-refresh"
              title="Refresh"
              v-on:click="refresh"
            ></v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-overlay
          v-model="logoutform"
          contained
          class="
            d-flex
            align-center
            justify-center justify-space-around
            flex-column flex-sm-row
            fill-height
          "
        >
          <v-btn
            class="form-btn"
            color="error"
            size="x-large"
            prepend-icon="mdi-cancel"
            @click="logoutform = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="form-btn"
            color="success"
            size="x-large"
            prepend-icon="mdi-logout"
            @click="logout"
          >
            Logout
          </v-btn>
        </v-overlay>
        <v-container fluid> <router-view></router-view></v-container>
      </v-main>
    </v-layout>
    <v-footer app>
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="bg-purple text-center"
      >
        <v-card-text>
          <v-btn class="mx-4" icon="mdi-home" variant="plain" href="/"></v-btn>
          <v-btn
            class="mx-4"
            icon="mdi-email"
            variant="plain"
            mailto="cxz123499@gmail.com"
          ></v-btn>
          <v-btn class="mx-4" icon="mdi-calendar" variant="plain"></v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="text-white">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    username: "",
    drawer: false,
    group: null,
    logoutform: false,
  }),
  methods: {
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    logout() {
      this.axios
        .get("/api/accounts/login/")
        .then((response) => {
          console.log(response);
          this.$store.commit("logout");
          alert("Logout Success");
          this.logoutform=false;
          this.$router.push({ name: "index" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    refresh() {
      let sessionid = this.getCookie("sessionid");
      console.log(sessionid);
      this.axios
        .post("/api/accounts/login/")
        .then((res) => {
          console.log(res.data);
          if (res.data.User != null && res.data.User != undefined) {
            this.username = res.data.User;
            this.$store.commit("login");
          }
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    logincheck() {
      console.log(this.$store.state.login);
      return this.$store.state.login;
    },
  },
  mounted() {
    let sessionid = this.getCookie("sessionid");
    console.log(sessionid);
    this.axios
      .post("/api/accounts/login/")
      .then((res) => {
        console.log(res.data);
        if (res.data.User != null && res.data.User != undefined) {
          this.username = res.data.User;
          this.$store.state.user = res.data.User;
          this.$store.commit("login");
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
.v-footer {
  margin: 0;
  padding: 0;
}
v-toolbar-title {
  margin: 20px;
}
.logoutform {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #aaa;
}
.form-btn {
  margin: 20px;
}
</style>
