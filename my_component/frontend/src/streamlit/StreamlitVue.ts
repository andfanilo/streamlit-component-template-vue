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
  component: Vue.Component
): Vue.Component {
  return Vue.component("withStreamlitConnection", {
    render(createElement) {
      return createElement(component);
    },
  });
}
