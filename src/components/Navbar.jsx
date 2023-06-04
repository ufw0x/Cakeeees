import React, { useState } from "react";
import { MdShoppingBag, MdMenu } from "react-icons/md";
import Menu from './Menu'
import MenuLinks from "./MenuLinks";
import Cart from './Cart'

const Navbar = () => {
  const [isOpen, setStatus] = useState(false);
  const [cartOpen , showCart] = useState(false)
  return (
    <React.Fragment>
      <nav className="w-full h-auto px-8 py-6 fixed top-0 left-0 backdrop-blur-xl z-50 bg-[#c8cac74a]">
        <div className="w-full h-auto flex flex-row justify-between container">
          <h1 className="text-black text-2xl font-bold font-nunito">
            Cake<span className="text-rose-500">ee</span>es
          </h1>
          <div className="flex-row space-x-6 mt-2 font-semibold hidden md:flex">
            <MenuLinks/>
          </div>
          <div className="flex flex-row space-x-2 text-3xl pt-1 text-rose-500">
            <MdShoppingBag role="button" className="text-rose-500" onClick={()=>{
               document.body.style.overflowY = "hidden"
                showCart(true)
            }} />
            <MdMenu role="button" className="text-black md:hidden" onClick={()=>{
                document.body.style.overflowY = "hidden"
                setStatus(true)
            }} />
          </div>
        </div>
      </nav>
      {isOpen ? (
          <Menu setStatus={setStatus}/>
      ) : (
        ""
      )}
       {
        cartOpen?(
          <Cart showCart={showCart}/>
        ):""
       }
    </React.Fragment>
  );
};

export default Navbar;
