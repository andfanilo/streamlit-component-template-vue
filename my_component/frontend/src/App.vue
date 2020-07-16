<template>
  <div id="app">
    <MyComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyComponent from "./MyComponent.vue";

export default Vue.extend({
  name: "App",
  components: {
    MyComponent,
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
