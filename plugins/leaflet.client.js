import Vue from "vue";
import { Icon } from "leaflet";
import { LMap, LTileLayer, LCircleMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("LMap", LMap);
Vue.component("LTileLayer", LTileLayer);
Vue.component("LCircleMarker", LCircleMarker);

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;
