import React from 'react'
import Growingplant from '../growingplant/growingplant'


const Home = () => {
    const plantData1={
        name:'rose',
        size:50,
    }
    const plantData2={
        name:'jasmine',
        size:30,
    }
// const data="sri";    
  return (
    <div>
      <Growingplant plantData= {plantData1}/>
      <Growingplant plantData={plantData2}/>
      {/* <Growingplant plantData/> */}

      {/* <Growingplant plantData={data}/> */}
       
      
    </div>
  )
}

export default Home
