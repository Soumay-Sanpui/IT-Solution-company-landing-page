import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#F7F6FE] flex flex-col py-[3vw]">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[51%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/59836308d26851b3323db3ac3fb6f60113df6e7e7a9db7f2e0552b192d682a3f?apiKey=409c33fc5d1744fa925c830aab5fd972&"
                      className="max-w-full aspect-[2.44] w-[135px]"
                    />
                    <div className="mt-5 leading-6 text-stone-500">
                      OurStudio is a digital agency UI / UX Design and Website
                      Development located in Ohio, United States of America
                    </div>
                    <div className="flex gap-4 mt-8 font-medium text-center text-white whitespace-nowrap leading-[150%] max-md:pr-5">
                      <div className="justify-center items-center px-3.5 w-10 h-10 bg-indigo-600 rounded-full">
                        Dr
                      </div>
                      <div className="justify-center items-center px-3 w-10 h-10 bg-indigo-600 rounded-full">
                        Bh
                      </div>
                      <div className="justify-center items-center px-2.5 w-10 h-10 bg-indigo-600 rounded-full">
                        Md
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-base font-medium leading-6 text-stone-500 max-md:mt-10">
                    <div className="font-bold leading-[137.5%] text-zinc-800">
                      Product
                    </div>
                    <div className="mt-9">UI/UX Design</div>
                    <div className="mt-6">Web Development</div>
                    <div className="mt-6">Mobile Development</div>
                    <div className="mt-6">IT Consultancy</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-6 text-base font-medium leading-6 text-stone-500 max-md:mt-10">
                    <div className="font-bold leading-[137.5%] text-zinc-800">
                      Support
                    </div>
                    <div className="mt-8">Contact Us</div>
                    <div className="mt-7">Knowladge Base</div>
                    <div className="mt-7">Forums</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="grow px-5 mt-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base font-medium leading-6 text-stone-500 max-md:mt-10">
                    <div className="font-bold leading-[137.5%] text-zinc-800">
                      Legal
                    </div>
                    <div className="mt-8">Legal Information</div>
                    <div className="mt-6">Privacy Policy</div>
                    <div className="mt-6">Report Abuse</div>
                    <div className="mt-6">Terms of Sources</div>
                    <div className="mt-7">WHOIS Lookup</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base font-medium leading-6 text-stone-500 max-md:mt-10">
                    <div className="font-bold leading-[137.5%] text-zinc-800">
                      Login
                    </div>
                    <div className="mt-8">Web Hosting</div>
                    <div className="mt-6">DreamCompute</div>
                    <div className="mt-6">Website Builder</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base font-medium leading-6 text-stone-500 max-md:mt-10">
                    <div className="font-bold leading-[137.5%] text-zinc-800">
                      Company
                    </div>
                    <div className="mt-8">About Us</div>
                    <div className="mt-7">Affiliate</div>
                    <div className="mt-7">Blog</div>
                    <div className="mt-6">Careers</div>
                    <div className="mt-7">Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-5 px-5 mt-6 w-full text-base leading-6 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-stone-500">
          Copyright Tanah Air Studio
        </div>
        <div className="flex gap-3 font-bold whitespace-nowrap text-zinc-800">
          <div className="my-auto">EN</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cae0006e4efb82b6fa0a655f9902c66c50ee89a94b80d86899d214416510f8f?apiKey=409c33fc5d1744fa925c830aab5fd972&"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
