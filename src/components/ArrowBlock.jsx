import React from 'react';

const ArrowBlock = ({dir}) => {
  return (
    <div className='p-2 hover:bg-btnBg w-max h-max cursor-pointer bg-zinc-300'>
      {
        dir == 'l' ? (
            <svg className='rotate-180' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
            </svg>
          ) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
            </svg>
            )
      }
    </div>
  );
}

export default ArrowBlock;
