import API from "@/config/API";

export default {
  async nuxtServerInit({ commit }) {
    try {
      const cases = await API.getCases();
      commit("SET_CASES", cases);

      const fatalityRate = await API.getFatalityRate();
      commit("SET_FATALITY_RATE", fatalityRate);
    } catch (error) {
      console.log(error);
    }
  },
  setSelectedLocationAndShowDialog({ commit }, payload) {
    commit("SET_SELECTED_LOCATION", payload);
    commit("APPEND_FILTERED_LOCATION_NAMES", payload);
    commit("SHOW_DETAILS_DIALOG");
  }
};
