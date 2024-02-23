import React from "react";
import { ContentList } from "../Array/ContentList";
import "../styles/middle.css"
const Middle = () => {
  return (
    <div>
      <div className="content  mt-5">
        <h1 className="middleHeading d-flex justify-content-center ">
          Fashions
        </h1>
        <div className="contentList container">
          {ContentList.map((contentItem) => (
            // <div className="contentItem">
            //     <h1>{contentItem.heading}</h1>
            //     <img className="image-content" src={contentItem.image} alt="image"/>
            //     {/* <div style={{background:`URL(${contentItem.image})`}}> */}
            //     <p>${contentItem.price}</p>

            // </div>
            <div className="contentItem  mx-5 mt-5">
             
              <h6>{contentItem.heading}</h6> 
              <img className="image-content" src={contentItem.image} alt="image"/>
                <p>${contentItem.price}</p>
              
            </div>
          ))}
        </div>
      </div>
      <hr>
      </hr>
    </div>
   
  );
};

export default Middle;
