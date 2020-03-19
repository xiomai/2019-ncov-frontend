<template>
  <v-card tile flat>
    <v-card-text>
      <client-only>
        <apexcharts
          height="300"
          ref="chart"
          :options="recovered.chartOptions"
          :series="recovered.series"
        ></apexcharts>
      </client-only>
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
    ...mapGetters("chart", ["recovered"])
  }
};
</script>
