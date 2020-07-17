<template>
  <div id="app">
    <with-streamlit-connection v-slot="{ args }">
      <MyComponent :args="args" />
    </with-streamlit-connection>
  </div>
</template>

<script>
import MyComponent from "./MyComponent.vue";
import StreamlitVue from "./streamlit/StreamlitVue.vue";

export default {
  name: "App",
  components: { MyComponent, "with-streamlit-connection": StreamlitVue }
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
