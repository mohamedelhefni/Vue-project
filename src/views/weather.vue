<template>
  <div class="weather">
    <h1 class="text-center">Weather App</h1>
    <div class="app">
      <div class="info">
        <div class="time-zone">
          <h2>{{ data.timezone }}</h2>
        </div>
        <div class="temp-icon">
          <skycon :condition="data.currently.icon" :width="width" :height="height" />
        </div>
      </div>
      <div class="temp">
        <h2>
          {{ ((data.currently.temperature - 32) * 5 / 9).toFixed(1) }} C
          <sup>o</sup>
        </h2>
      </div>
      <div class="temp-status">
        <h2>{{data.hourly.summary}}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueSkycons from "vue-skycons";
import axios from "axios";
Vue.use(VueSkycons, { color: "white" });
export default {
  name: "weather",
  data() {
    return {
      width: 180,
      height: 180,
      data: ""
    };
  },
  methods: {
    checkLocation: function() {
      let long;
      let lat;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          let long = position.coords.longitude;
          let lat = position.coords.latitude;
          const proxy = "https://cors-anywhere.herokuapp.com/";
          const api = `${proxy}https://api.darksky.net/forecast/951c24360b94667f758b43174da44ee6/${lat},${long}`;
          axios
            .get(api)

            .then(data => {
              this.data = data.data;
            });
        });
      }
    }
  },
  beforeMount() {
    this.checkLocation();
  }
};
</script>

<style lang="scss" scoped>
.weather {
  height: calc(100vh - 64px);
  background: linear-gradient(rgb(250, 75, 75), rgb(153, 102, 6));
  color: white;
  h1 {
    font-weight: bold;
    margin: 0;
    padding: 1em;
  }
  h2 {
    font-weight: bold;
  }
  .app {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
    .info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
