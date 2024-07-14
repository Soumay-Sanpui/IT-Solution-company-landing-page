import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flex w-screen items-center justify-around p-4'>
      <div>
        <img src='/logo.png'/>
      </div>
      <div className='flex gap-3 items-center justify-evenly'>
        {
          ["About Us", "Features", "Teams", "Portfolio", "Client", "Contact", "FB", "TW", "IG"].map((lnk,index)=>(
            <div key={index} className='cursor-pointer hover:text-pink-600 hover:font-bold'>
              <p>{lnk}</p>
            </div>
          ))
        }
        <Button text={"Hire Us"} className={"bg-btnBg text-white"}/>
      </div>
    </nav>
  );
}

export default Navbar;
