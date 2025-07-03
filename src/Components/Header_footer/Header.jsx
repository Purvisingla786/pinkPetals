import React from "react";
import logo from "../../assets/Images/logo.jfif";
import { Search, ShoppingBag } from "lucide-react";
import Inputs from "../utils/Inputs";

function Header() {
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
        <div className="hidden hamburger">
          <div className="w-5 rounded-3xl bg-black border-2 border-black mb-0.5"></div>
          <div className="w-5 rounded-3xl bg-black border-2 border-black mb-0.5"></div>
          <div className="w-5 rounded-3xl bg-black border-2 border-black mb-0.5"></div>
        </div>
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
