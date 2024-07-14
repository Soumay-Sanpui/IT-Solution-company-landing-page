import React from 'react';
import Button from '../Button';

const AboutSection = () => {
  return (
    <div className='flex p-6 items-center justify-center'>
      {/* left */}
      <div className='w-1/2'>
        <div className='bg-black w-[40vw] h-[30vw]'></div>
      </div>
      {/* right */}
      <div className='flex flex-col gap-[3vw] w-1/2'>
        <h2 className='text-[3vw] font-semibold'>Perfect solution for your website</h2>
        <p>Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company</p>
        <div>
          <Button text={"Learn More"}/>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
