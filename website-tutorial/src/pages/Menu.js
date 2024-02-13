import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu container">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList ">
        {/* {MenuList.map((menuItem,key)=>{
          return<MenuItem 
          key={key}
          image={menuItem.image} 
          name={menuItem.name} 
          price={menuItem.price}/>
        })

        } */}
        {MenuList.map((menuItem) => (
          <div className="menuItem">
            {/* <div className="menuList">
              <img src={menuItem.image} alt="Pizza ImAGE" />
            </div> */}
            <div style={{ background: `url(${menuItem.image})` }}></div>
            <h1>{menuItem.name}</h1>
            <p>${menuItem.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
