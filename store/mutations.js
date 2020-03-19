export default {
  TOGGLE_THEME(state) {
    state.isDarkTheme = !state.isDarkTheme;
  },
  SET_CASES(state, payload) {
    state.cases = payload;
  },
  SET_FATALITY_RATE(state, payload) {
    state.fatalityRate = payload;
  },
  SHOW_DETAILS_DIALOG(state) {
    state.showDetailsDialog = true;
  },
  HIDE_DETAILS_DIALOG(state) {
    state.showDetailsDialog = false;
  },
  SHOW_SEARCH_DIALOG(state) {
    state.showSearchDialog = true;
  },
  HIDE_SEARCH_DIALOG(state) {
    state.showSearchDialog = false;
  },
  SHOW_REPO_DIALOG(state) {
    state.showRepoDialog = true;
  },
  HIDE_REPO_DIALOG(state) {
    state.showRepoDialog = false;
  },
  SET_SELECTED_LOCATION(state, payload) {
    state.selectedLocation = {
      ...payload,
      confirmed: +payload.dates[payload.dates.length - 1].confirmed,
      death: +payload.dates[payload.dates.length - 1].death,
      recovered: +payload.dates[payload.dates.length - 1].recovered
    };
  },
  APPEND_FILTERED_LOCATION_NAMES(state, payload) {
    if (!!payload["Province/State"]) {
      state.filteredLocationNames = [payload["Country/Region"]];
      return;
    }

    state.filteredLocationNames = [
      ...state.filteredLocationNames,
      payload["Country/Region"]
    ];
  },
  CLEAR_FILTERED_LOCATION_NAMES(state) {
    state.filteredLocationNames = [];
    state.defaultLocationNames = [];
  },
  REMOVE_FILTERED_LOCATION_NAME(state, payload) {
    state.filteredLocationNames = state.filteredLocationNames.filter(
      lname => lname !== payload["Country/Region"]
    );
  },
  SET_FILTERED_LOCATION_NAMES(state, payload) {
    state.filteredLocationNames = payload;
  },
  SET_DEFAULT_FILTERED_LOCATION_NAMES(state, payload) {
    state.defaultLocationNames = payload;
  }
};
