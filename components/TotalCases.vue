<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      class="d-flex flex-column justify-center align-center"
    >
      <span :class="[count]"><ICountUp :endVal="cases.total_confirmed"/></span>
      <span :class="[title]">Infected</span>
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="d-flex flex-column justify-center align-center"
    >
      <span :class="[count]"><ICountUp :endVal="cases.total_recovered"/></span>
      <span :class="[title]">Recovered</span>
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="d-flex flex-column justify-center align-center"
    >
      <span :class="[count]"><ICountUp :endVal="cases.total_death"/></span>
      <span :class="[title]">Deaths</span>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cases"]),
    count() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "display-2 font-weight-bold";
      }

      return "display-1 font-weight-bold";
    },
    title() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "mt-4 title";
      }

      return "mt-4 subtitle-1";
    }
  }
};
</script>
