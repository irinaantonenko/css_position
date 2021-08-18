<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 50vh; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="marker" />
      <l-icon-default :image-path="path" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault } from "vue2-leaflet";

export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault
  },
  data() {
    return {
      zoom: 13,
      path: "/images/",
      center: [40.78997954266243, -73.97129362430688],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(40.78997954266243, -73.97129362430688)
    };
  }
};
</script>
<style lang="scss">
@import '../../css/variables.scss';
.leaflet-control-attribution .leaflet-control, .leaflet-pane, .leaflet-top, .leaflet-bottom {
  z-index: 500;
}
l-map {
  @media (max-width: $xl) {
    height: 60vh;
  }
}

</style>