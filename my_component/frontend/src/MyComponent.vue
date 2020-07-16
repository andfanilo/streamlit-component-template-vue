<template>
  <div class="wrapper">
    <h1>Hello Streamlit</h1>
  </div>
</template>

<script>
import Vue from "vue";
import { withStreamlitConnection, Streamlit } from "./streamlit";

const MyComponent = Vue.extend({
  name: "MyComponent"
});

export default withStreamlitConnection(MyComponent);
</script>

<style scoped>
h1 {
  margin: 0;
}
</style>
