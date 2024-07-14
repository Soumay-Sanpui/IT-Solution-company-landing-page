import React from 'react';

const BlogCard = () => {
  return (
    <div className="max-w-[584px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba2ecf68ef330d82993f7b2c5a9550956b8f220d5b24c626246b3272667577c3?apiKey=409c33fc5d1744fa925c830aab5fd972&"
            className="grow w-full aspect-[0.77] max-md:mt-6"
          />
        </div>
        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto font-medium leading-[150%] max-md:mt-10">
            <div className="text-2xl font-bold leading-8 text-zinc-800">
              8 Rules of Thumb in UI Design
            </div>
            <div className="mt-4 text-base leading-6 text-stone-500">
              Bring to the table win-win survival strategies to ensure proactive
              domination
            </div>
            <div className="mt-4 text-xs text-stone-300">23 September 2020</div>
            <div className="flex gap-5 justify-between mt-24 text-sm text-indigo-600 max-md:mt-10">
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
    </div>
  );
}

export default BlogCard;
