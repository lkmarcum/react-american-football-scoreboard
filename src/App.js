//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import Buttons from "./Buttons";

function App() {
  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow />
        <BottomRow />
      </section>
      <Buttons />
    </div>
  );
}

export default App;
