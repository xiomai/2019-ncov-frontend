<template>
  <v-app-bar app clipped-left>
    <v-toolbar-title>
      COVID-19
      <span v-show="$vuetify.breakpoint.smAndUp"
        >Worldwide Confirmed Cases</span
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip left :dark="isDarkTheme">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" @click="SHOW_SEARCH_DIALOG">
          <v-icon>mdi-map-search</v-icon>
        </v-btn>
      </template>
      <span>Search</span>
    </v-tooltip>
    <v-tooltip left :dark="isDarkTheme">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" @click="TOGGLE_THEME">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </template>
      <span>Switch theme</span>
    </v-tooltip>
    <v-tooltip bottom :dark="isDarkTheme">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" @click="SHOW_REPO_DIALOG" icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>Repo</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["isDarkTheme"])
  },
  methods: {
    ...mapMutations(["TOGGLE_THEME", "SHOW_SEARCH_DIALOG", "SHOW_REPO_DIALOG"])
  }
};
</script>

<style></style>
