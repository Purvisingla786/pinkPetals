import React, { useState } from "react";
import logo from "../../assets/Images/logo.jfif";
import { Search, ShoppingBag, X } from "lucide-react";
import Inputs from "../utils/Inputs";

function Header({}) {
    const [navOpen,setnavOpen] = useState(false)
  return (
    <>
      <div className="overflow-hidden py-2 bg-[#e677a1]  hidden top_tagline">
      <div className="text-md  font-semibold slideInText hover:text-white text-center">
        Elegance Woven Into Every Thread
      </div>
      </div>

    <div className="primary_gradient">
      <div className=" flex py-4 px-2  justify-between items-center container ">
        <div>
        <div className="flex gap-8 main_menu">
          <div>HOME</div>
          <div>ABOUT</div>
          <div>SHOP</div>
          <div>CONTACT</div>
        </div>
     {navOpen ?
     <div onClick={()=>setnavOpen(false)}><X/></div>
     :<div className={`hidden hamburger`} onClick={()=>setnavOpen(true)}>
          <div className="w-5 rounded-3xl bg-black border-2 border-black mb-0.5"></div>
          <div className="w-5 rounded-3xl bg-black border-2 border-black mb-0.5"></div>
          <div className="w-5 rounded-3xl bg-black border-2 border-black mb-0.5"></div>
      </div>
     }
     {/* navbar */}
          <div className={`absolute duration-300  top-[112px] left-0 backdrop-blur-xs z-10 h-full w-full ${navOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className={`w-1/4 h-full secondary_gradient z-20 absolute top-0 left-0 text-center`}>

     <div className="p-4 border-b-2 border-gray-200 border-t-2">HOME</div>
          <div className="p-4 border-b-2 border-gray-200">ABOUT</div>
          <div className="p-4 border-b-2 border-gray-200">SHOP</div>
          <div className="p-4 border-b-2 border-gray-200">CONTACT</div>
<div className="flex justify-end w-full h-full flex-col">
  <div>Sign In</div>
</div>
      </div>
        </div>
        {/* navbar */}
        </div>
                <div className="flex gap-4 items-center">
          <img src={logo} className="h-20 w-28 rounded-2xl logo" alt="" />
          <div className="overflow-hidden py-2">
         <p className="text-md  font-semibold slideInText hover:text-white tagline">
           Elegance Woven Into Every Thread
          </p>
          </div>
          </div>

          <div className="flex gap-4 items-center">
             <div className="flex gap-2 border-2 p-1 rounded-3xl text-black items-center border-black search">
                <Search color="#000000" />
                <Inputs
                  placeholder="Search..."
                  className="bg-transparent text_input "
                />
              </div>
              <div className="icon_search hidden">
                 <Search color="#000000" />
              </div>
                 <ShoppingBag/>
          </div>
        
      </div>
    </div>
    

    </>
  );
}

export default Header;
