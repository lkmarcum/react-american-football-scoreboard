import React from "react";
import "./App.css";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

const Buttons = () => {
  return (
    <section className="buttons">
      <HomeButtons />
      <AwayButtons />
    </section>
  );
};

export default Buttons;
