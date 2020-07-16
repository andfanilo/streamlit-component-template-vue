<template>
  <div id="app">
    <MyComponent />
  </div>
</template>

<script>
import Vue from "vue";
import MyComponent from "./MyComponent.vue";
import { withStreamlitConnection } from "./streamlit";

export default Vue.extend({
  name: "App",
  components: {
    MyComponent: withStreamlitConnection(MyComponent)
  }
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
