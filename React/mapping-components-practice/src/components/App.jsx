// eslint-disable-next-line
import React from "react";
import RenderCard from "./RenderCard";
// import emojipedia from "../emojipedia";


function App() {
return (
  <div>
    <h1>
      <span>emojipedia</span>
    </h1>
        <dl className="dictionary">
    <RenderCard />
    </dl>
  </div>
);
}

export default App;
