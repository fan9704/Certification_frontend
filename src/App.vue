<template>
  <v-app>
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
              v-if="login"
              prepend-icon="mdi-account"
              title="Account"
              to="/account/setting"
            ></v-list-item>
            <v-list-item
              v-if="!login"
              prepend-icon="mdi-account"
              title="Login/Register"
              to="/account/login"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-badge"
              title="Certification List"
              to="/certification/list"
            >
           </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
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
    drawer: false,
    group: null,
    login: false,
  }),
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
</style>
