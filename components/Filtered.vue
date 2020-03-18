<template>
  <v-col cols="12" md="4">
    <perfect-scrollbar>
      <v-card tile flat>
        <v-card-title>
          <v-icon large left>mdi-filter</v-icon>
          <span class="title font-weight-light">Filters</span>
        </v-card-title>
        <v-card-text v-if="isLocationCasesFiltered">
          <p class="title font-weight-light">
            <span class="font-weight-bold">Infected:</span>
            <span class="red--text text--darken-2">
              <ICountUp :endVal="locationCases.total_confirmed" />
            </span>
          </p>
          <p class="title font-weight-light">
            <span class="font-weight-bold">Recovered:</span>
            <ICountUp :endVal="locationCases.total_recovered" />
          </p>
          <p class="title font-weight-light">
            <span class="font-weight-bold">Deaths:</span>
            <ICountUp :endVal="locationCases.total_death" />
          </p>
          <div class="row align-center justify-center">
            <v-btn v-on="on" @click="CLEAR_FILTERED_LOCATION_NAMES">
              <span class="v-btn__content"><span>Clear Filter</span></span>
            </v-btn>
          </div>
          <v-list three-line>
            <v-list-item
              v-for="(locationCase, i) in locationCasesData"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <v-btn
                    icon
                    x-small
                    @click="REMOVE_FILTERED_LOCATION_NAME(locationCase)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <span class="font-weight-bold">
                    <ICountUp
                      class="red--text text--darken-2"
                      :endVal="locationCase.confirmed"
                    />
                  </span>
                  {{ locationCase["Country/Region"] }}
                  {{ locationCase["Province/State"] }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Deaths:
                  <ICountUp :endVal="locationCase.death" />
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Recovered:
                  <ICountUp :endVal="locationCase.recovered" />
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </perfect-scrollbar>
  </v-col>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "isLocationCasesFiltered",
      "filteredLocationNames",
      "locationCases",
      "locationCasesData"
    ])
  },
  methods: {
    ...mapMutations([
      "CLEAR_FILTERED_LOCATION_NAMES",
      "REMOVE_FILTERED_LOCATION_NAME"
    ])
  }
};
</script>

<style scoped>
.ps {
  height: 70vh;
}
</style>
