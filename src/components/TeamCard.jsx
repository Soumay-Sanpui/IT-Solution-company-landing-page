import React from 'react';

const TeamCard = ({icn, name, designation, desc}) => {
  return (
    <div className="flex flex-col pb-9 text-sm bg-white shadow-2xl max-w-[296px]">
      <div className='h-full w-full'></div>
      <img
        loading="lazy"
        src={icn}
        className="w-full aspect-[0.97]"
      />
      <div className="flex flex-col px-6 mt-8 w-full">
        <div className="text-2xl font-bold leading-8 text-zinc-800">
          {name}
        </div>
        <div className="mt-5 font-medium leading-[150%] text-neutral-400">
          {designation}
        </div>
        <div className="mt-8 leading-5 text-stone-500">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
