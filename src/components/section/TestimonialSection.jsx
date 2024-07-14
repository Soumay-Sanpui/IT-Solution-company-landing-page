import React from 'react';
import Button from '../Button';

const TestimonialSection = () => {
  return (
    <div className='w-screen  bg-[#F7F6FE] flex items-center justify-end gap-[5vw] py-[8vw]'>
      {/* form section */}
      <div className='w-[40vw] flex flex-col justify-center gap-7'>
        <div>
          <h2 className='text-[3vw] font-semibold'>Get in Touch</h2>
          <p>Have a project in mind that you think we'd be a great fit for it? We'd love to know what you're thinking</p>
        </div>
        {/* name email */}
        <div className='flex gap-3'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold'>Full Name</h3>
            <input className='p-3 outline-none border-txt/50 border bg-white w-[20vw]' placeholder='Input your full name in here'/>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold'>Email Address</h3>
            <input className='p-3 outline-none border-txt/50 border bg-white w-[20vw]' placeholder='Input your Email in here'/>
          </div>
        </div>
        {/* subject */}
        <div>
          <h3 className='font-semibold'>Subject</h3>
          <div className='flex gap-4 flex-wrap'>
            {
              ["IT Consulancy", "Web Design", "Mobile Design", "Development", "QA Testing", "Other"].map((opt,index)=>(
                <label htmlFor={index} className='flex gap-2'>
                  <input type='radio' id={index} name='subopt'/>
                  <p>{opt}</p>
                </label>
              ))
            }
          </div>
        </div>
        {/* message */}
        <div>
          <h3 className='font-semibold'>Message</h3>
          <div>
            <textarea className='p-3 w-full border border-txt/50' placeholder='Write your message here'></textarea>
          </div>
        </div>
        {/* button */}
        <div>
          <Button text="Send Message"/>
        </div>
      </div>
      {/* image section */}
      <div className='bg-black w-[45vw] h-screen'></div>
    </div>
  );
}

export default TestimonialSection;
