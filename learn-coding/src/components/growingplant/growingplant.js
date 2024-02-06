import React from "react";
import "./growingplant.css";



const Growingplant = (plantData) => {
  // // console.log('props',props)
  // // console.log(props.plantName)

  // // const plantData={
  // //   name:'sunflower',
  // //   size:10,
  // //   famil:'plants',

  // }
//   const name={
//     first:'sri',
//     last:'nithya'
//   }
// const {first,last}=name
// console.log(name.first,name.last,first,last,)
 
//   console.log(name.first)
//   console.log(name.last)
//  const{plantData}=props
let{name,size}=plantData
  const bigger=()=>{
    console.log("before",size)
    size=size+20
    console.log("clicked",size)
  }
  return (
   
       
      <div className="plant">
        <h1>{plantData.name}</h1>
        <div className="txt">I am growing a <span style={{fontSize:`${plantData.size}px`}}>{plantData.name} </span>plant </div>
        {/* <div className="logo">plant3</div> */}
        <button onClick={bigger}>give water</button>
      </div>
  
  );
  
  
}

export default Growingplant

