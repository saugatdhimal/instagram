import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//folder structures (architecture)
  //src
    // -> components,
    // -> constants,
    // -> context,
    // -> helpers,
    // -> hooks,
    // -> pages,
    // -> lib (firebase is going to live in here)
    // -> services (firebase functions in here)
    // -> styles (tailwind's folder (app/tailwind))
