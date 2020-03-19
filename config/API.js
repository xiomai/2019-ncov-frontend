import axios from "axios";

// const http = axios.create({
//   baseURL: "https://api.the2019ncov.com"
// });

export default {
  async getCases() {
    const { data } = await axios.get("/api/cases");
    return data;
  },

  async getTimeline() {
    const { data } = await axios.get("/api/timeline");
    return data;
  },

  async getFatalityRate() {
    const { data } = await axios.get("/api/fatality-rate");
    return data;
  }
};
