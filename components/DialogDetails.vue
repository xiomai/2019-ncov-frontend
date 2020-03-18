<template>
  <v-dialog
    width="500"
    v-model="showDetailsDialog"
    v-if="selectedLocation"
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <v-card>
      <v-card-title>
        <span v-show="$vuetify.breakpoint.smAndUp" class="headline"
          >Confirmed Cases: {{ selectedLocation.country }}</span
        >
        <span v-show="$vuetify.breakpoint.xsOnly" class="headline">{{
          selectedLocation.country
        }}</span>
        <v-spacer></v-spacer>
        <v-btn
          v-show="$vuetify.breakpoint.xsOnly"
          @click="HIDE_DETAILS_DIALOG"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <p>Country/Region: {{ selectedLocation["Country/Region"] }}</p>
          <p v-show="selectedLocation['Province/State']">
            Province/State: {{ selectedLocation["Province/State"] }}
          </p>

          <p>
            Confirmed:
            <ICountUp
              class="red--text text--darken-2"
              :endVal="selectedLocation.confirmed"
            />
          </p>
          <p>
            Deaths:
            <ICountUp :endVal="selectedLocation.death" />
          </p>
          <p>
            Recovered:
            <ICountUp :endVal="selectedLocation.recovered" />
          </p>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="height: 80vh;"
          v-else
        >
          <p class="text-center">
            <span class="display-1">{{
              selectedLocation["Country/Region"]
            }}</span>
            <br />
            <span class="title">Country Region</span>
          </p>
          <p class="text-center" v-if="selectedLocation['Province/State']">
            <span class="display-1">{{
              selectedLocation["Province/State"]
            }}</span>
            <br />
            <span class="title">Province/State</span>
          </p>

          <p class="text-center">
            <span class="display-1">
              <ICountUp
                class="red--text text--darken-2"
                :endVal="selectedLocation.confirmed"
              />
            </span>
            <br />
            <span class="title">Confirmed</span>
          </p>

          <p class="text-center">
            <span class="display-1">
              <ICountUp :endVal="selectedLocation.death" />
            </span>
            <br />
            <span class="title">Deaths</span>
          </p>

          <p class="text-center">
            <span class="display-1">
              <ICountUp :endVal="selectedLocation.recovered" />
            </span>
            <br />
            <span class="title">Recovered</span>
          </p>
        </div>
      </v-card-text>
      <v-card-actions v-show="$vuetify.breakpoint.smAndUp">
        <v-spacer></v-spacer>
        <v-btn text @click="HIDE_DETAILS_DIALOG">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["showDetailsDialog", "selectedLocation"])
  },
  methods: {
    ...mapMutations(["HIDE_DETAILS_DIALOG"])
  }
};
</script>

<style></style>
