import { useState } from "react";
import React from "react";
export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens : 30
  });

  const handle1 =(value)=>{
    setInv({ notebook :inv.notebooks+value})
 }

 
 const handle2 =(value)=>{
    setInv({ pen : inv.pens+value})
 }
 const handle3 =(value)=>{
    setInv({ inkpens : inv.inkpens+value})
 }
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>

        <button className="circlularButton" onClick={() => handle1(1)}>+</button>
        <button className="circlularButton" onClick={() => handle1(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton"  onClick={() => handle1(1)} >+</button>
        <button className="circlularButton" onClick={() => handle1(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => handle2(1)}>+</button>
        <button className="circlularButton" onClick={() => handle2(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"  onClick={() => handle3(1)}>+</button>
        <button className="circlularButton"  onClick={() => handle3(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/   }
     total:   {   
       inv.books +inv.notebook+ inv.pens +inv.inkpens 
        }
    </div>
  );
};

