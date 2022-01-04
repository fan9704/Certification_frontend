<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <transition name="slide">
      <v-container v-show="isShow">
        <h2 class="h2">Login Account</h2>
        <transition name="fade">
          <v-alert shaped prominent type="error" v-show="error">
            {{ error_msg }}
          </v-alert>
        </transition>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="username"
              :rules="nameRules"
              :counter="30"
              label="Username"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="password"
              :rules="passwordRules"
              :counter="30"
              label="Password"
              required
              hint="At least 8 characters"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Remeber Me?"
          required
        ></v-checkbox>

        <v-btn color="warning" class="mr-4" v-on:click="slidetoggle">
          Haven,t account?Register
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset</v-btn>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
          Login
        </v-btn>
      </v-container>
    </transition>

    <!-- Register -->
    <transition name="slide">
      <v-container v-show="!isShow">
        <h2 class="h2">Register Account</h2>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="username"
              :rules="nameRules"
              :counter="30"
              label="Username"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :counter="30"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="first_name"
              :rules="nameRules"
              :counter="30"
              label="first name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="last_name"
              :rules="nameRules"
              :counter="30"
              label="last name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="email"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn color="warning" class="mr-4" v-on:click="slidetoggle"
          >Go to Login</v-btn
        >

        <v-btn color="error" class="mr-4" @click="reset"> Reset</v-btn>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="register"
        >
          Register
        </v-btn>
      </v-container>
    </transition>
  </v-form>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    error: false,
    error_msg: "",
    isShow: true,
    valid: true,
    username: "",
    password: "",
    nameRules: [
      (v) => !!v || "Userame is required",
      (v) => v.length <= 30 || "Userame must be less than 30 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length <= 30 || "Password must be less than 30 characters",
    ],
    checkbox: false, //Agree or not
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    slidetoggle() {
      this.isShow = !this.isShow;
    },
    login() {
      if (this.username == "" || this.password == "") {
        this.error = true;
        this.error_msg = "Username or Password mustn,t be empty";
        setInterval(()=>this.error=false,2000)//same as CSS
      } else {
        let config = {
          username: this.username,
          password: this.password,
        };
        let url = "/api/accounts/login/";
        this.axios
          .post(url, config)
          .then((response) => {
            console.log(response.data);
            if (response.data.login == true) {
              this.$store.commit("login");
              this.$router.push({ name: "index" });
            } else {
              this.error = true;
              this.error_msg = "Login Failed Username Or Password Error";
              setInterval(()=>this.error=false,2000)//same as CSS
            }
          })
          .catch((error) => console.log(error));
      }
    },
    register() {
      let config = {
        username: this.username,
        password: this.password,
        first_name: this.fisrt_name,
        last_name: this.last_name,
        email: this.email,
      };
      let url = "/api/accounts/register/";
      this.axios
        .post(url, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.v-alert {
  width: 70%;
}
h2.h2 {
  margin-bottom: 15px;
}
@media screen and (min-width: 960px) {
  .v-container {
    left: 10%;
    right: 10%;
    position: relative;
  }
}
.v-form {
  position: relative;
  height: 90vh;
}
.v-container {
  position: absolute;
}
.slide-leave-active,
.slide-enter-active {
  transition: all 0.7s ease;
  transform: opacity;
}
.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-enter-to {
  /* transform: translateY(-50%); */
  opacity: 1;
}
.slide-leave-from {
  /* transform: translateY(-50%); */
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 2s ease;
  transform: opacity;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>