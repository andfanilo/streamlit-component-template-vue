import Vue from "vue";
import { RenderData, Streamlit } from "./streamlit";

export interface ComponentProps {
  /** Named dictionary of arguments passed from Python. */
  args: any;

  /** The component's width. */
  width: number;

  /**
   * True if the component should be disabled.
   * All components get disabled while the app is being re-run,
   * and become re-enabled when the re-run has finished.
   */
  disabled: boolean;
}

export function withStreamlitConnection(
  WrappedComponent: Vue.Component
): Vue.Component {
  return Vue.extend({
    render(createElement) {
      return createElement(WrappedComponent);
    },
    methods: {
      onRenderEvent: function(event: Event) {
        const data = (event as CustomEvent<RenderData>).detail;
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
      Streamlit.setFrameHeight();
    },
    destroyed() {
      Streamlit.events.removeEventListener(
        Streamlit.RENDER_EVENT,
        this.onRenderEvent
      );
    },
  });
}
