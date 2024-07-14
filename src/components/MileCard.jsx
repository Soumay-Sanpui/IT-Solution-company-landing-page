import React from 'react';

const MileCard = ({num,desc}) => {
  return (
    <div className='rounded-lg text-center hover:bg-ctaBg hover:text-white w-[15vw] p-5 cursor-pointer'>
      <h3 className='font-semibold text-[2vw]'>{num}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default MileCard;
