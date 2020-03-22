<template>
  <v-row>
    <v-col cols="12" md="4" class="d-xl-flex flex-column justify-center align-center text-center">
      <v-skeleton-loader type="list-item"></v-skeleton-loader>
      <span :class="[title]">Infected</span>
    </v-col>
    <v-col cols="12" md="4" class="d-xl-flex flex-column justify-center align-center text-center">
      <v-skeleton-loader type="list-item"></v-skeleton-loader>
      <span :class="[title]">Recovered</span>
    </v-col>
    <v-col cols="12" md="4" class="d-xl-flex flex-column justify-center align-center text-center">
      <v-skeleton-loader type="list-item"></v-skeleton-loader>
      <span :class="[title]">Deaths</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    title() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "mt-10 title";
      }

      return "mt-10 subtitle-1";
    }
  }
};
</script>
