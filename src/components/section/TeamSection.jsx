import React from 'react';
import ArrowBlock from '../ArrowBlock';
import TeamCard from '../TeamCard';

const TeamSection = () => {
  const teamMembers = [
    {
      icn: '/tm1.png', 
      name: 'John H. Doe', 
      designation: 'CEO', 
      desc: 'My Responsibility is manage our team and build strategy for my beloved company'
    },
    {
      icn: '/tm2.png',
      name: 'Emma Russel',
      designation: 'Creative Director',
      desc: 'I’ll Will help you to build strategy from scratch till deliver'
    }
  ]
  return (
    <div className='p-10 flex w-screen'>
      {/* left */}
      <div className='flex flex-col gap-[2vw] w-[40%]'>
        <h2 className='text-[3vw] font-semibold'>Kick Start Your Product With Us</h2>
        <p>We will help a client's problems to develop the products they have with high quality</p>
        <div className='flex text-txt items-baseline justify-start'>
          <h2 className='text-[3vw] font-semibold text-black'>02</h2>
          <p>/</p>
          <p>05</p>
        </div>

        <div className='flex gap-4'>
          <ArrowBlock dir={"l"}/>
          <ArrowBlock dir={"r"}/>
        </div>
      </div>
      {/* right card section */}
      <div className='w-[60%] flex  items-center justify-around'>
        {
          teamMembers.map((member,index)=>(
            <TeamCard icn={member.icn} desc={member.desc} name={member.name} designation={member.designation} key={index}/>
          ))
        }
      </div>
    </div>
  );
}

export default TeamSection;
