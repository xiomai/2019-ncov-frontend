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
    </v-row>
  </v-container>
</template>

<script>
import TotalCases from "@/components/TotalCases";
import LeafletMap from "@/components/Map";

export default {
  components: {
    TotalCases,
    LeafletMap
  }
};
</script>
