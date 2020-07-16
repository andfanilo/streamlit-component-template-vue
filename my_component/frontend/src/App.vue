<template>
  <div id="app">
    <StreamlitVue />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StreamlitVue from "./streamlit/StreamlitVue.vue";

export default Vue.extend({
  name: "App",
  components: {
    StreamlitVue,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
