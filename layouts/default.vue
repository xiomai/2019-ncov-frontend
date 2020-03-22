<template>
  <v-app>
    <AppBar />
    <v-content>
      <nuxt />
      <v-row>
        <v-col cols="12">
          <Reference />
        </v-col>
      </v-row>
      <DialogDetails />
      <SearchDialog />
      <RepoDialog />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppBar from "@/components/AppBar";
import Reference from "@/components/Reference";
import DialogDetails from "@/components/DialogDetails";
import SearchDialog from "@/components/SearchDialog";
import RepoDialog from "@/components/RepoDialog";

export default {
  created() {
    this.$vuetify.theme.dark = this.isDarkTheme;
  },
  computed: {
    ...mapState(["isDarkTheme"])
  },
  watch: {
    isDarkTheme(val) {
      this.$vuetify.theme.dark = val;
    }
  },
  components: {
    AppBar,
    Reference,
    DialogDetails,
    SearchDialog,
    RepoDialog
  }
};
</script>


<style>
.ps {
  height: 37vh;
  overflow: visible;
  overflow-y: auto;
}
</style>
