<template>
  <v-card tile flat>
    <v-card-text>
      <apexcharts
        height="300"
        ref="chart"
        :options="dailyReport.chartOptions"
        :series="dailyReport.series"
      ></apexcharts>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Apexcharts: () => import("vue-apexcharts")
  },
  computed: {
    ...mapState(["isDarkTheme"]),
    ...mapGetters("chart", ["dailyReport"])
  }
};
</script>
