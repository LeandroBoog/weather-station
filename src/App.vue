<template>
  <div id="app" v-if="true">

    <div class="section">
      <HelloWorld/>
    </div>


    <div v-if="false">

    <full-page ref="fullpage" :options="fullpageOptions" :skip-init="false">
      <div class="section">
        <GoogleMap :routes="data"/>
      </div>
      <div class="section">
        <ChartInterface :data="data"/>
      </div>
    </full-page>

    </div>

  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue'
import ChartInterface from "@/components/ChartInterface";
import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'App',
  components: {
    GoogleMap,
    ChartInterface,
    HelloWorld
  },

  data() {
    return {
      data: null,
      errorLoadingData: false
    }
  },

  computed: {
    dataLoaded: function () {
      return (this.data !== null)
    }
  },

  created() {
    this.$axios
        .get('http://localhost:8000/routes/')
        .then(data => this.data = data)
        .catch(error => {
          console.error(error)
          this.errorLoadingData = true
        })

    // 'http://localhost:8000/routes/'
  }
}
</script>

<style>
html, body {
  background-color: white;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #margin: 60px auto;
  height: 100%;
  width: 100%;
}


/* test css */
.section{
  position: relative;
  text-align: center;
}
</style>
