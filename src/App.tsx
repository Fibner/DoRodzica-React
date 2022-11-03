import React, { useState } from "react";
import { Range } from "./Components/Range";

function App() {
  const [myWidth, setMyWidth] = useState(100);
  const [myHeight, setMyHeight] = useState(100);

  return (
    <div>
      <div>
        <div>
          <Range setFunc={setMyWidth} />
        </div>
        <div style={{float: 'left', transform: "rotate(90deg)", width: "23px" }}>
          <Range setFunc={setMyHeight} />
        </div>
      </div>
      <div
        style={{
          float: 'left',
          width: myWidth * 2 + "px",
          height: myHeight * 2 + "px",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        test
      </div>
    </div>
  );
}

export default App;
