<template>
  <div>
    <div class="slide">
      <p>hello</p> </div>
    <div class="slide">
      <p>another</p>
    </div>
    <div class="slide">
      <p>aewdaw</p>
    </div>


    <div v-if="false">
      <LineChart
          v-for="(chart, index) in this.charts"
          :key="index"
          :chart-data="chart"/>
    </div>

  </div>
</template>

<script>
import transformRoutesDataToChartObject from "@/lib/transformRoutesDataToChartObject"
import LineChart from "@/components/LineChart";

export default {
  name: "ChartInterface",
  components: {LineChart},
  props: {
    data: {
      type: Array,
      default: null
    }
  },

  data() {
    return {charts: null}
  },
  mounted() {
    this.charts = transformRoutesDataToChartObject(this.data)
  }
}
</script>

<style lang="scss" scoped>
  .scroll-container {
    overflow-x: scroll;

    .scroll-pane {
      padding: 2rem;

      .chart-grid {
        display: grid;
        grid-template-columns: 40vw 40vw 40vw;
        grid-template-rows: 50vh 50vh;
      }
    }
  }
</style>