<template>
  <div id="app">
    <WithStreamlitConnection v-slot="{ args }">
      <MyComponent :args="args" />
    </WithStreamlitConnection>
  </div>
</template>

<script>
import MyComponent from "./MyComponent.vue";
import WithStreamlitConnection from "./streamlit/WithStreamlitConnection.vue";

export default {
  name: "App",
  components: { MyComponent, WithStreamlitConnection }
};
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
