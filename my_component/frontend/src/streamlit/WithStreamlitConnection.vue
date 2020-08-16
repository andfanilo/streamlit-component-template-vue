<template>
  <div>
    <!-- 
      Error boundary. If our wrapped component threw an error, display it.
    -->
    <div v-if="componentError != null">
      <h1 class="err__title">Component Error</h1>
      <div class="err__msg">{{componentError}}</div>
    </div>
    <!-- 
      Else render the component slot and pass Streamlit event data in `args` props to it.
      Don't render until we've gotten our first RENDER_EVENT from Streamlit.
      All components get disabled while the app is being re-run, and become re-enabled when the re-run has finished.
    -->
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
    /**
     * Streamlit is telling this component to redraw.
     * We save the render data in component's data.
     */
    onRenderEvent: function(event) {
      const renderEvent = event as CustomEvent<RenderData>;
      this.renderData = renderEvent.detail;
    }
  },
  mounted() {
    // Set up event listeners, and signal to Streamlit that we're ready.
    // We won't render the component until we receive the first RENDER_EVENT.
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
  errorCaptured(err: Error) {
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