<template>
  <v-container>
    <h1>Welcome Certification DataCenter</h1>
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-hover v-slot="{ hover, props }" open-delay="300">
            <v-card>
              <v-img
                :class="{ 'on-hover': hover }"
                src="../assets/MTA.png"
                height="375"
                class="grey darken-4"
                v-bind="props"
              ></v-img>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    orange
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                >
                  $3200
                </div>
              </v-expand-transition>
              <v-card-title class="text-h6"> Micorsoft MTA </v-card-title>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="6">
          <v-hover v-slot="{ hover, props }" open-delay="300">
            <v-card>
              <v-img
                :class="{ 'on-hover': hover }"
                src="../assets/CCNA.png"
                height="375"
                class="grey darken-4"
                v-bind="props"
              ></v-img>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    orange
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                >
                  $8000
                </div>
              </v-expand-transition>
              <v-card-title class="text-h6"> Cisco CCNA </v-card-title>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="6">
          <v-hover v-slot="{ hover, props }" open-delay="300">
            <v-card>
              <v-img
                :class="{ 'on-hover': hover }"
                src="../assets/TOEIC.jpg"
                height="375"
                class="grey darken-4"
                v-bind="props"
              ></v-img>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    orange
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                >
                  $1600
                </div>
              </v-expand-transition>
              <v-card-title class="text-h6"> TOEIC </v-card-title>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="6">
          <v-hover v-slot="{ hover, props }" open-delay="300">
            <v-card>
              <v-img
                :class="{ 'on-hover': hover }"
                src="../assets/TQC.png"
                height="375"
                class="grey darken-4"
                v-bind="props"
              ></v-img>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    orange
                    darken-2
                    v-card--reveal
                    text-h2
                    white--text
                  "
                  style="height: 100%"
                >
                  $1500
                </div>
              </v-expand-transition>
              <v-card-title class="text-h6"> TQC+ </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
export default {
  date() {
    return {
      hover4: "",
      props4: "",
    };
  },
  name: "Index",
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>