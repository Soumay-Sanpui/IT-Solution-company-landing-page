import React from 'react';
import ArrowBlock from "../ArrowBlock"

const PortfolioSection = () => {
  return (
    <div className='w-screen p-10'>
      {/* top */}
      <div className='w-full flex items-center justify-between px-[4vw]'>
        <h2 className='text-[3vw] font-semibold'>Our Best Work</h2>
        <div className='flex gap-4'>
          <ArrowBlock dir={'l'} />
          <ArrowBlock dir={'r'} />
        </div>
      </div>
      {/* bottom cards */}
      <div className='overflow-x-auto flex px-[4vw] gap-[3vw] w-full'>
        {
          Array.from({length: 1}).map((index)=>(
            <div key={index} className='bg-black w-[55vw] h-[35vw]'></div>
          ))
        }
      </div>
    </div>
  );
}

export default PortfolioSection;
