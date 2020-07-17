<template>
  <div class="wrapper">
    <span>
      Hello, {{args.name}}! &nbsp;
      <button v-on:click="onClicked()">Click Me!</button>
    </span>
  </div>
</template>

<script>
import { Streamlit } from "./streamlit";

export default {
  name: "MyComponent",
  props: ["args"],
  data() {
    return {
      numClicks: 0
    };
  },
  methods: {
    onClicked: function() {
      this.numClicks++;
      Streamlit.setComponentValue(this.numClicks);
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 0;
}
</style>
