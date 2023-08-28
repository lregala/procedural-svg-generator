import RandomizedSVG from "./RandomizedSVG";
import "./styles.css";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function App() {
  const [seed, setSeed] = useState(uuidv4());

  const colorPalette = [
    "#a5a3a6",
    "#6aa7bb",
    "#6aa7bb",
    "#ff4257",
    "#ff4257",
    "#eaeaea",
    "#1985a1",
    "#252729"
  ];

  const handleClick = () => {
    setSeed(uuidv4());
  };

  return (
    <div className="App">
      <RandomizedSVG
        userUuid={seed}
        height={"360"}
        width={"360"}
        colorPalette={colorPalette}
      />
      <div className="btncontainer">
        <button onClick={handleClick}>Generate</button>
      </div>
    </div>
  );
}
