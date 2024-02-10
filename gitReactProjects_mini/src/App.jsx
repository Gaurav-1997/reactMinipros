import "./App.css";
import React, { useState } from "react";
import MultiSearch from "./components/MultiSearch/index";

function App() {
  const data = {
    india: "delhi",
    france: "paris",
    italy: "rome",
    germany: "berlin",
    spain: "madrid",
    japan: "tokyo",
  };

  return (
    <>
      <MultiSearch data={data} />
    </>
  );
}

export default App;
