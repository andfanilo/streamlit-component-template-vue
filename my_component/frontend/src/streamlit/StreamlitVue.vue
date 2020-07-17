<template>
  <div>
    <slot :args="renderData.args" :disabled="renderData.disabled"></slot>
  </div>
</template>


<script>
import { Streamlit } from "./streamlit";

export default {
  name: "StreamlitVue",
  data() {
    return {
      renderData: undefined,
      componentError: undefined
    };
  },
  methods: {
    onRenderEvent: function(event) {
      const renderEvent = event;
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
  errorCaptured(error) {
    this.errorCaptured = componentError;
  }
};
</script>