<template>
  <div>
    <div v-if="componentError != null">
      <h1 class="err__title">Component Error</h1>
      <div class="err__msg">{{componentError}}</div>
    </div>
    <slot v-else-if="renderData != null" :args="renderData.args" :disabled="renderData.disabled"></slot>
  </div>
</template>

<script lang="ts">
import { Streamlit, RenderData } from "./streamlit";

export default {
  name: "withStreamlitConnection",
  data() {
    return {
      renderData: undefined as RenderData,
      componentError: undefined as Error
    };
  },
  methods: {
    onRenderEvent: function(event) {
      const renderEvent = event as CustomEvent<RenderData>;
      this.renderData = renderEvent.detail;
    }
  },
  mounted() {
    Streamlit.events.addEventListener(
      Streamlit.RENDER_EVENT,
      this.onRenderEvent
    );
    Streamlit.setComponentReady();
    Streamlit.setFrameHeight();
  },
  updated() {
    Streamlit.setFrameHeight();
  },
  destroyed() {
    Streamlit.events.removeEventListener(
      Streamlit.RENDER_EVENT,
      this.onRenderEvent
    );
  },
  errorCaptured(err, vm, info = "") {
    this.componentError = err;
    this.renderData = undefined;
  }
};
</script>

<style scoped>
.err__title,
.err__msg {
  margin: 0;
}
</style>