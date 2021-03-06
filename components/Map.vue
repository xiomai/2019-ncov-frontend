<template>
  <l-map
    ref="map"
    style="z-index: 0; height: 100%; width: 100%"
    :zoom="zoom"
    :center="center"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @update:bounds="boundsUpdated"
  >
    <l-tile-layer :url="tileLayerUrl"></l-tile-layer>
    <l-circle-marker
      @click="setSelectedLocationAndShowDialog(l)"
      v-for="(l, idx) in locations"
      :key="idx"
      :lat-lng="[+l.Lat, +l.Long]"
      color="red"
      fillColor="#f00"
      :fillOpacity="0.35"
      :stroke="false"
      :radius="l.radius"
    />
  </l-map>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Map",
  data: () => ({
    url:
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    zoom: 4,
    center: [12.8797, 121.774],
    bounds: null
  }),
  computed: {
    ...mapState(["isDarkTheme"]),
    ...mapGetters(["mapLocations"]),
    locations() {
      const withConfirmedData = this.mapLocations.filter(
        i => i.dates[i.dates.length - 1].confirmed
      );
      return withConfirmedData.map(item => ({
        ...item,
        radius: this.scale(item.dates[item.dates.length - 1].confirmed)
      }));
    },
    tileLayerUrl() {
      const darkTheme =
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
      const lightTheme =
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
      return this.isDarkTheme ? darkTheme : lightTheme;
    }
  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
    ...mapActions(["setSelectedLocationAndShowDialog"]),
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    flyTo(lat, lon) {
      this.$refs.map.mapObject.flyTo([lat, lon]);
    },
    scale(d) {
      const min = 1;
      const factor = 5;
      const zoomFactor = this.zoom >= 5 ? 1 : this.zoom / 10; // adjust divisor for best optics
      return Math.floor(Math.log(d) * factor * zoomFactor) + min;
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          this.flyTo(coords.latitude, coords.longitude);
        });
      }
    }
  }
};
</script>
