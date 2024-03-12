import "./App.css";
import React from "react";

function App({ imageData }) {
  return (
    <>
      <h2> Kalvium Gallery </h2>
      <div className="parentDiv">
        {imageData.map((e) => {
          return (
            <img
              className="image"
              src={e.img}
              id={e.id}
              key={e.id}
              alt={`Elephant ${e.id}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;