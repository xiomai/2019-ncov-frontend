import axios from "axios";

export default {
  async nuxtServerInit({ commit }, { env }) {
    const { defaultLocationNames, baseURL } = env;

    const http = axios.create({
      baseURL
    });

    try {
      if (defaultLocationNames.length) {
        commit("SET_DEFAULT_FILTERED_LOCATION_NAMES", defaultLocationNames);
        commit("SET_FILTERED_LOCATION_NAMES", defaultLocationNames);
      }

      const cases = await http.get("/api/cases");
      commit("SET_CASES", cases.data);

      // const fatalityRate = await http.get("/api/fatality-rate");
      // commit("SET_FATALITY_RATE", fatalityRate.data);
    } catch (error) {
      console.log(error);
    }
  },
  setSelectedLocationAndShowDialog({ commit }, payload) {
    commit("SET_SELECTED_LOCATION", payload);
    commit("APPEND_FILTERED_LOCATION_NAMES", payload);
    // commit("SHOW_DETAILS_DIALOG");
  }
};
