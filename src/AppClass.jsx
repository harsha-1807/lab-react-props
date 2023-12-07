import React from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends React.Component{
  
  imageData = ()=>{
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

  // code here
  render(){
    let imageArr = this.imageData()
  return(
    <>
     <h1>Kalvium Gallery</h1>
     {/* <div className='parent_div'>
        <img src={imageArr[0].img} className='image' alt="" />
        <img src={imageArr[0].img} className='image' alt="" />
        <img src={imageArr[0].img} className='image' alt="" />
        <img src={imageArr[0].img} className='image' alt="" />
     </div> */}
     <div className="parent_div">
       {
        imageArr.map(elem=>{
          return(
            <img src={elem.img} className='image' alt='elephant'></img>
          )
        })
       }
     </div>
    </>
  )
  }
}