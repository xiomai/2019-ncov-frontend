<template>
  <v-col cols="12" md="4">
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
          <v-btn @click="CLEAR_FILTERED_LOCATION_NAMES">
            <span class="v-btn__content">
              <span>Clear Filter</span>
            </span>
          </v-btn>
        </div>
        <perfect-scrollbar v-if="!$vuetify.breakpoint.smAndDown">
          <v-list three-line>
            <v-list-item
              v-for="(locationCase, i) in _locationCasesData"
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
        </perfect-scrollbar>
        <v-list v-else three-line>
          <v-list-item v-for="(locationCase, i) in _locationCasesData" :key="i">
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
        <v-btn
          v-if="$vuetify.breakpoint.smAndDown"
          text
          block
          @click="loadMore"
          :disabled="limit >= locationCasesData.length"
          >Load More</v-btn
        >
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

Vue.use(PerfectScrollbar);

export default {
  data() {
    return {
      limit: this.$vuetify.breakpoint.smAndDown ? 5 : 0
    };
  },
  computed: {
    ...mapGetters([
      "isLocationCasesFiltered",
      "filteredLocationNames",
      "locationCases",
      "locationCasesData"
    ]),
    _locationCasesData() {
      if (!this.limit) return this.locationCasesData;

      return this.locationCasesData.splice(0, this.limit);
    }
  },
  methods: {
    ...mapMutations([
      "CLEAR_FILTERED_LOCATION_NAMES",
      "REMOVE_FILTERED_LOCATION_NAME"
    ]),
    loadMore(e, val = 5) {
      this.limit += val;
    }
  }
};
</script>
