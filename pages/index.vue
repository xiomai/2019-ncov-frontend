<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <TotalCases />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-card tile style="height: 70vh;" flat>
          <LeafletMap />
        </v-card>
      </v-col>
      <client-only>
        <Filtered />
      </client-only>
    </v-row>

    <client-only>
      <v-row>
        <v-col cols="12" md="6">
          <DailyReport />
        </v-col>
        <v-col cols="12" md="6">
          <RecoveredChart />
        </v-col>
      </v-row>
    </client-only>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TotalCases from "@/components/TotalCases";
import LeafletMap from "@/components/Map";
import Filtered from "@/components/Filtered";
import DailyReport from "@/components/DailyReport";
import RecoveredChart from "@/components/RecoveredChart";

export default {
  components: {
    TotalCases,
    LeafletMap,
    Filtered,
    DailyReport,
    RecoveredChart
  }
};
</script>
