import React from "react";
import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App(props) {
  // code here
  let image_arr = imageData()
  console.log(image_arr)
  return(
    <>
    <h1>Kalvium gallery</h1>
    
    <div className='parentDiv'>
      {
        image_arr.map(elem =>{
          return(
            <img src={elem.img} className='images' alt="elephant" />
          )
        })
      }
    </div>



    </>
  )
}

export default App;
