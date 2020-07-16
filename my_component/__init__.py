import streamlit as st
import streamlit.components.v1 as components

_component_func = components.declare_component(
    "my_component",
    url="http://localhost:3001",
)

def my_component(name, key=None):
    component_value = _component_func(name=name, key=key, default=0)
    return component_value

st.subheader("Component with constant args")
num_clicks = my_component("World")
st.markdown("You've clicked %s times!" % int(num_clicks))

st.markdown("---")

st.subheader("Component with variable args")
name_input = st.text_input("Enter a name", value="Streamlit")
num_clicks = my_component(name_input, key="foo")
st.markdown("You've clicked %s times!" % int(num_clicks))