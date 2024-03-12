import React from "react";
import "./App.css";


export default class AppClass extends React.Component {
  render() {
    const { imageData } = this.props; // Destructuring imageData from props
    return (
      <>
        <h2>Kalvium Gallery</h2>
        <div className="parent_div">
          {imageData.map(elem => {
            return (
              <img
                src={elem.img}
                className="image"
                alt={`Elephant ${elem.id}`}
                key={elem.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}
