import React from 'react';

const ServiceCard = ({icn, ttl, desc}) => {
  return (
    <div className='p-6 shadow-lg shadow-black/20 flex flex-col gap-[2vw] w-[25vw] h-[25vw] hover:scale-95'>
      <div>
        {icn}
      </div>
      <h3 className='text-[2vw] font-semibold'>{ttl}</h3>
      <p className='text-[1vw]'>{desc}</p>
    </div>
  );
}

export default ServiceCard;
