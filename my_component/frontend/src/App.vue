<template>
  <div id="app">
    <MyComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyComponent from "./MyComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    MyComponent,
  },
});
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>