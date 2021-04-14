<template>
  <div class="map-wrapper">

    <GmapMap
        class="map"
        :zoom="zoom"
        :center="{lat: 52.266666, lng: 10.516667}"
        :options="mapOptions"
        ref="mapRef"
    >

      <div v-for="(route, routeIndex) in this.routes" :key="routeIndex">
        <GmapMarker
          v-for="(measurement, index) in route.measurements"
          :key="index"
          :position="measurement.position"
          @click="toggleInfoWindow(measurement, index)"
        ></GmapMarker>
      </div>

      <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
      ></GmapInfoWindow>

    </GmapMap>

  </div>
</template>

<script>
import createInfoWindowContentTemplate from "@/lib/createInfoWindowContentTemplate";

export default {
  name: "GoogleMap",
  props: {
    routes: {
      type: Array,
      default: null
    }
  },

  data () {
    return {

      // Map Variables
      mapOptions: {
        streetViewControl: false
      },
      zoom: 12,

      // Info-Window Variables
      infoWindowPos: { lat: 0, lng: 0 },
      infoWinOpen: false,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        }
      },

      // Marker Variables
      currentMarkerId: null,

      routeColors: [
        '#ff0000',
        '#e68a00',
        '#e8e830',
        '#669900',
        '#66ff66',
        '#00ace6',
        '#3333ff',
        '#a31aff'
      ]
    }
  },

  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMarkerId === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMarkerId = idx;
      }
    },
    getInfoWindowContent: function (marker) {
      return createInfoWindowContentTemplate(marker)
    }
  },

  async mounted() {

    // Add route paths to the Map
    this.$refs.mapRef.$mapPromise.then(map => {

      const bounds = new window.google.maps.LatLngBounds()
      for (const [index, route] of this.routes.entries()) {

        for(const measurement of route.measurements) {
          bounds.extend(measurement.position)
        }
        // just in case https://stackoverflow.com/questions/31055752/google-map-multiple-polyline
        const path = new window.google.maps.Polyline({
          path: route.measurements.map(measurements => measurements.position),
          geodesic: true,
          strokeColor: this.routeColors[index],
          strokeOpacity: 1.0,
          strokeWeight: 2,
        })
        path.setMap(map)

      }
      map.fitBounds(bounds);
    })
  }
}

</script>

<style scoped>

  .map-wrapper {
    height: 100%;
    width: 100%;
  }

  .map {
    height:100%;
  }
</style>