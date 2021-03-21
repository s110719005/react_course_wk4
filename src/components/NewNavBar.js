import { useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "./NavBar";
import HamMenu from "./HamMenu";

export default function Header({title}) {
   const [isOnTouch, setIsOnTouch] = useState(false);
   return (
      <div className="new-navbar">
         <HamMenu 
            onClick={()=>setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch} 
         />
         
         <NavBar isOnTouch={isOnTouch} />
      </div>
   );
}