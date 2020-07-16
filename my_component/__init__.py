import streamlit as st
import streamlit.components.v1 as components

_component_func = components.declare_component(
    "my_component",
    url="http://localhost:3001",
)

def my_component(v):
    return _component_func(value=v, default=0, key="key")

st.subheader("My Component")
slider_value = st.slider("Slide me !", 0, 100)
component_value = my_component(slider_value)
st.write(component_value)