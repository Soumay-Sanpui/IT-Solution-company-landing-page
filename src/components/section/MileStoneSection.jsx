import React from 'react';
import MileCard from "../MileCard"

const MileStoneSection = () => {
  const milestones = [
    {
      num: 350,
      desc: 'Happy Client'
    },
    {
      num: 325,
      desc: 'Project Done'
    },
    {
      num: 400,
      desc: 'Meeting Done'
    }
  ];
  return (
    <div className='w-screen p-10 flex'>
      {/* left */}
      <div className='w-1/2 flex flex-col gap-[2vw]'>
        <h2 className='text-[3vw] font-semibold'>Our Statistic</h2>
        <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website.</p>
      </div>
      {/* right */}
      <div className='w-1/2 flex items-center justify-center'>
        <div className='flex'>
          {
            milestones.map((milestone,index)=>(
              <MileCard key={index} num={milestone.num} desc={milestone.desc}/>
            ))
          }
          </div>
      </div>
    </div>
  );
}

export default MileStoneSection;
