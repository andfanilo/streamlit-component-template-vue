<template>
  <span>
    Hello, Fanilo! &nbsp;
    <button @click="onClicked">Click Me!</button>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated, onUnmounted } from "vue";
import { Streamlit } from "./streamlit";

export default defineComponent({
  name: "MyComponent",
  setup() {
    const numClicks = ref(0);
    const onClicked = () => {
      numClicks.value++;
      Streamlit.setComponentValue(numClicks.value);
    };

    const onRender = (): void => {
      Streamlit.setFrameHeight();
    };

    onMounted(() => {
      Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender);
      Streamlit.setComponentReady();
      Streamlit.setFrameHeight();
    });
    onUpdated(() => {
      Streamlit.setFrameHeight();
    });
    onUnmounted(() => {
      Streamlit.events.removeEventListener(Streamlit.RENDER_EVENT, onRender);
    });

    return {
      numClicks,
      onClicked,
    };
  },
});
</script>
