import colors from "vuetify/es5/util/colors";
import serverRoutes from "./server";

require("dotenv").config();

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "COVID-19",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  serverMiddleware: [...serverRoutes],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/countup.client.js",
    "~/plugins/leaflet.client.js",
    "~/plugins/vue2-filters.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? process.env.PRODUCTION_BASE_URL || "https://thecovid19.now.sh"
        : process.env.BASE_URL || "http://localhost:3000",
    defaultLocationNames: !!process.env.DEFAULT_FILTER_LOCATION_NAMES
      ? process.env.DEFAULT_FILTER_LOCATION_NAMES.split(",")
      : []
  }
};
