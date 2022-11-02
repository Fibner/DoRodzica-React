import React, { useState } from "react";
import { Range } from "./Components/Range";

function App() {
  const [myWidth, setMyWidth] = useState(50)
  const [myHeight, setMyHeight] = useState(50)

  return (
    <div>
      Szerokość:
      <Range setFunc={setMyWidth}/>
      Wysokość:
      <Range setFunc={setMyHeight}/>
      <div>
        <div style={{width: myWidth*2+'px', height: myHeight*2+'px', border: '1px solid black'}}></div>
      </div>
    </div>
  );
}

export default App;
