import React from "react";
import ReactDOM from "react-dom";
import MapArray from "./Map-Array/MapArray";
import UseEffect from "./Hooks-Test/UseEffect";
import UseReducer from "./Hooks-Test/UseReducer";
import UseMemo from "./Hooks-Test/UseMemo";
import UseCallback from "./Hooks-Test/UseCallback";
import UseRef from "./Hooks-Test/UseRef";

ReactDOM.render(
  <React.StrictMode>
    <UseRef />
  </React.StrictMode>,
  document.getElementById("root")
);
