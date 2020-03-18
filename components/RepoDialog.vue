<template>
  <v-dialog
    width="500"
    v-model="showRepoDialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <v-card>
      <v-card-title>
        <span v-show="$vuetify.breakpoint.smAndUp" class="headline"
          >This is a ported repo from:
        </span>
        <v-btn
          v-show="$vuetify.breakpoint.xsOnly"
          @click="HIDE_REPO_DIALOG"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <p>
            Original:
            <a href="https://github.com/sorxrob/2019-ncov-frontend"
              >https://github.com/sorxrob/2019-ncov-frontend</a
            >
          </p>
          <p>
            Repo:
            <a href="https://github.com/xiomai/2019-ncov-frontend"
              >https://github.com/xiomai/2019-ncov-frontend</a
            >
          </p>
        </div>
        <div
          class="d-flex flex-column justify-center align-center"
          style="height: 80vh;"
          v-else
        >
          <p class="text-center">
            Original:
            <a href="https://github.com/sorxrob/2019-ncov-frontend"
              >https://github.com/sorxrob/2019-ncov-frontend</a
            >
          </p>
          <p class="text-center">
            Repo:
            <a href="https://github.com/xiomai/2019-ncov-frontend"
              >https://github.com/xiomai/2019-ncov-frontend</a
            >
          </p>
        </div>
      </v-card-text>
      <v-card-actions v-show="$vuetify.breakpoint.smAndUp">
        <v-spacer></v-spacer>
        <v-btn text @click="HIDE_REPO_DIALOG">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["showRepoDialog"])
  },
  methods: {
    ...mapMutations(["HIDE_REPO_DIALOG"])
  }
};
</script>

<style></style>
