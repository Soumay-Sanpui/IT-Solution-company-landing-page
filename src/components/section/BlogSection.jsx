import React from 'react';
import BlogCard from "../BlogCard"
import Button from '../Button';

const BlogSection = () => {
  return (
    <div className='bg-[#F7F6FE] w-screen px-[4vw] p-10 flex flex-col items-center justify-center gap-[5vw]'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-[3vw] font-semibold'>Our Blog</h2>
        <p className='text-center w-[80%]'>Have a project in mind that you think we'd be a great fit for it? We'd love to know what you're thinking</p>
      </div>

      <div className='flex gap-6'>
        {/* left */}
        <div>
          <div className="flex flex-col pb-6 font-medium bg-white rounded-lg leading-[150%] max-w-[608px] shadow-[0px_25px_55px_rgba(126,126,126,0.15)]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bc16cf0098112b6ce0330a4a67118a6d83e7fc7afb6149aae5814a6ecb3965f?apiKey=409c33fc5d1744fa925c830aab5fd972&"
              className="w-full aspect-[1.59] max-md:max-w-full"
            />
            <div className="flex flex-col px-6 mt-8 w-full max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-bold leading-8 text-zinc-800 max-md:max-w-full">
                How to make a website look more attractive with llustrations
              </div>
              <div className="mt-5 text-base leading-6 text-stone-500 max-md:max-w-full">
                Runway heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for offshoring.
              </div>
              <div className="mt-4 text-xs text-stone-300 max-md:max-w-full">
                23 September 2020
              </div>
              <div className="flex gap-5 justify-between mt-10 text-sm text-indigo-600 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col self-start">
                  <div>Read More</div>
                  <div className="shrink-0 mt-2.5 h-1 bg-indigo-600" />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7882b8079855364b615a6d7b12b0344ba7c3ce0d77b66bb0dec8818acd2d334?apiKey=409c33fc5d1744fa925c830aab5fd972&"
                  className="shrink-0 max-w-full aspect-[4.35] w-[104px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-col items-center justify-between'>
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div>
        <Button text={"Learn More"}/>
      </div>
    </div>
  );
}

export default BlogSection;
