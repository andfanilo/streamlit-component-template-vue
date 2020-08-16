<template>
  <span>
    Hello, {{ args.name }}! &nbsp;
    <button @click="onClicked">Click Me!</button>
  </span>
</template>

<script>
import { ref } from "vue";
import { Streamlit } from "./streamlit";

export default {
  name: "MyComponent",
  props: ["args"], // Arguments that are passed to the plugin in Python are accessible in prop "args"
  setup() {
    const numClicks = ref(0);
    const onClicked = () => {
      numClicks.value++;
      Streamlit.setComponentValue(numClicks.value);
    };

    return {
      numClicks,
      onClicked,
    };
  },
};
</script>
