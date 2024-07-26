import React from "react";
import Cards from "./components/Cards";

function HomePage() {
  return (
    <div className="grid-flow-row grid-row-4">
      <div className="row-span-1">
        <Cards />
      </div>
    </div>
  );
}

export default HomePage;
