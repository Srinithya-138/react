import React,{useState,useEffect} from "react";
import "./growingplant.css";
const Growingplant = ({plantData}) => {
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
let {name,size}=plantData
// const data=plantData
// console.log(plantData)
// console.log(plantData)
const [dynamicsize,setdynamicsize]=useState(size)
useEffect(()=>{
console.log('her')
  },[])
  useEffect(()=>{
    console.log('dynamic size changed:',dynamicsize)
    if(dynamicsize>100){
      alert('plant grown successfully')
    }
      },[dynamicsize])
  const bigger=()=>{
    setdynamicsize(dynamicsize+30)
  }
  return (
       <div className="plant">
        <h1>{name}</h1>
        <div className="txt">I am growing a <span style={{fontSize:`${dynamicsize}px`}}>{name} </span>plant </div>
        <button onClick={bigger}>give water</button>
      </div>
      // <div>
      //   <h1>{plantData}</h1>
       
      // </div>
  );
}
export default Growingplant

