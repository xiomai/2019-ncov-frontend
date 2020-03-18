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
      <Filtered />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TotalCases from "@/components/TotalCases";
import LeafletMap from "@/components/Map";
import Filtered from "@/components/Filtered";

export default {
  components: {
    TotalCases,
    LeafletMap,
    Filtered
  }
};
</script>
