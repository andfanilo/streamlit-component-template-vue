<template>
  <div class="st">
    <h1>Hello Streamlit</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Streamlit, RenderData } from "./streamlit";

export default Vue.extend({
  name: "StreamlitVue",
  methods: {
    onRenderEvent: function(event: Event) {
      const data = (event as CustomEvent<RenderData>).detail;
      console.log(data);
      Streamlit.setComponentValue(data.args.value);
      Streamlit.setFrameHeight();
    },
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
    if (this.componentError != null) {
      Streamlit.setFrameHeight();
    }
  },
  destroyed() {
    Streamlit.events.removeEventListener(
      Streamlit.RENDER_EVENT,
      this.onRenderEvent
    );
  },
});
</script>

<style scoped>
h1 {
  margin: 0;
}
</style>
