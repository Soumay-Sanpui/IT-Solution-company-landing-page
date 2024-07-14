import React from 'react';
import Button from '../Button';

const HeroSection = () => {
  return (
    <div className='flex w-screen p-6'>
      {/* left */}
      <div className='flex flex-col gap-[3vw] items-start justify-center'>
        <h2 className='text-[3vw] font-semibold'>We help grow the creative industry</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. </p>
        <div>
          <Button text={"Get Started"}/>
        </div>
      </div>
      {/* right */}
      <div className='flex items-start justify-start gap-3'>
        <div className='w-[16vw] h-[27vw] bg-black'></div>
        <div className='w-[33vw] h-[38vw] bg-black'></div>
      </div>
    </div>
  );
}

export default HeroSection;
