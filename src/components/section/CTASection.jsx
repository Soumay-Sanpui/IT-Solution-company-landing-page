import React from 'react';
import Button from '../Button';

const CTASection = () => {
  return (
    <div className="w-screen bg-ctaBg text-white py-[7vw] px-[3vw] flex items-center justify-center gap-[3vw] my-[8vw]">
      <div>
        <h2 className='text-[3vw] font-semibold'>Wanna try our resource?</h2>
        <p>What a brand new resource, You can try our resource and explore how it works</p>
      </div>
      <div className='flex items-center justify-center gap-[1vw]'>
        <Button className={"bg-btnBg text-white"} text={"Premium Resource"}/>
        <Button className={"bg-white text-ctaBg"} text={"Free Resource"}/>
      </div>

    </div>
  );
}

export default CTASection;
