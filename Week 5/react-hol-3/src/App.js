import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="RAHU"
        School="Maharishi vidya mandir"
        Total={450}
        goal={5}
      />
    </div>
  );
}

export default App;