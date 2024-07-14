import React from 'react';
import Button from '../Button';
import ServiceCard from "../ServiceCard"

const ServiceSection = () => {
  const services = [
    {
      icn: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="#43CC74"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23 32C23.55 32 24 32.45 24 33C24 34.1 23.1 35 22 35C21.83 35 21.67 34.98 21.5 34.95C21.81 34.4 22 33.74 22 33C22 32.45 22.45 32 23 32ZM34.67 19C34.41 19 34.16 19.1 33.96 19.29L25 28.25L27.75 31L36.71 22.04C37.1 21.65 37.1 21.02 36.71 20.63L35.37 19.29C35.17 19.09 34.92 19 34.67 19ZM23 30C21.34 30 20 31.34 20 33C20 34.31 18.84 35 18 35C18.92 36.22 20.49 37 22 37C24.21 37 26 35.21 26 33C26 31.34 24.66 30 23 30Z" fill="white"/>
      </svg>
      ,
      ttl: "UI/UX Design",
      desc: "Create 2d / 3d video animation in a short period of time designed to promote a company product"
    },
    {
      icn: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="#4B33FF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34 29V36H20V22H25.02C25.07 21.29 25.24 20.62 25.5 20H20C18.9 20 18 20.9 18 22V36C18 37.1 18.9 38 20 38H34C35.1 38 36 37.1 36 36V31L34 29ZM35.3 24.89C35.74 24.19 36 23.38 36 22.5C36 20.01 33.99 18 31.5 18C29.01 18 27 20.01 27 22.5C27 24.99 29.01 27 31.49 27C32.37 27 33.19 26.74 33.88 26.3L37 29.42L38.42 28L35.3 24.89ZM31.5 25C30.12 25 29 23.88 29 22.5C29 21.12 30.12 20 31.5 20C32.88 20 34 21.12 34 22.5C34 23.88 32.88 25 31.5 25Z" fill="white"/>
      </svg>
      ,
      ttl: "QA Testing",
      desc: "Change the appearance of a design into code that will be made into an amazing website"
    },
    {
      icn: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="#EB3079"/>
      <path d="M28.0003 32.9983C28.5528 32.9983 29.0007 32.5506 29.0007 31.9983C29.0007 31.4461 28.5528 30.9983 28.0003 30.9983C27.4479 30.9983 27 31.4461 27 31.9983C27 32.5506 27.4479 32.9983 28.0003 32.9983Z" fill="white"/>
      <path d="M27 30H29V29C29 29.0024 29.0047 28.9972 29.0154 28.9854C29.0417 28.9565 29.1039 28.888 29.2205 28.7955C29.3207 28.716 29.3517 28.6954 29.6048 28.535C30.4661 27.989 31 27.0396 31 26C31 24.3431 29.6569 23 28 23C26.3431 23 25 24.3431 25 26H27C27 25.4477 27.4477 25 28 25C28.5523 25 29 25.4477 29 26C29 26.3473 28.8225 26.6629 28.534 26.8458C28.2102 27.0511 28.1564 27.0867 27.9775 27.2286C27.3827 27.7005 27 28.2627 27 29V30Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M28 38C29.7246 38 31.387 37.562 32.8595 36.7418L37.0947 37.0947L36.7418 32.8595C37.562 31.387 38 29.7246 38 28C38 22.4772 33.5228 18 28 18C22.4772 18 18 22.4772 18 28C18 33.5228 22.4772 38 28 38ZM32.115 34.8621L32.3916 34.6958L34.9053 34.9053L34.6958 32.3916L34.8621 32.115C35.603 30.8824 36 29.4715 36 28C36 23.5817 32.4183 20 28 20C23.5817 20 20 23.5817 20 28C20 32.4183 23.5817 36 28 36C29.4715 36 30.8824 35.603 32.115 34.8621Z" fill="white"/>
      </svg>
      ,
      ttl: " IT Consultancy",
      desc: "Make the appearance of a mobile application that has quality and increases user convenience"
    },
    {
      icn: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill="#F7473E"/>
      <path d="M31.2929 24.2929L27 28.5858L24.7071 26.2929L23.2929 27.7071L27 31.4142L32.7071 25.7071L31.2929 24.2929Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M28 39C22 36.3271 19 33.6604 19 31V21C19 20.2324 19.2946 20.054 20.1099 19.5603C20.3568 19.4108 20.6514 19.2324 21 19C21.1618 18.8921 24.5632 17 28 17C30.9952 17 33.5 18 35 19C35.3486 19.2324 35.6432 19.4108 35.8901 19.5603C36.7054 20.054 37 20.2324 37 21C37.0197 21.2172 37.01 25.8371 37.0038 28.7947C37.0017 29.8033 37 30.6186 37 31C37 33.6667 34 36.3333 28 39ZM35 31C35 30.7697 35.0006 30.3838 35.0018 29.7547L35.0059 27.8014C35.0072 27.1695 35.0082 26.6272 35.009 26.1098C35.0127 23.8776 35.0117 21.9618 35.0096 21.3693L34.8722 21.284C34.5488 21.0834 34.1274 20.8219 33.8906 20.6641C32.4143 19.6799 30.2602 19 28 19C25.8381 19 23.0286 20.0513 22.1094 20.6641C21.8726 20.8219 21.4512 21.0834 21.1278 21.284L21 21.3633V31C21 32.5085 23.2291 34.5687 28.0009 36.802C32.7722 34.5737 35 32.5142 35 31Z" fill="white"/>
      </svg>
      ,
      ttl: "Database Security",
      desc: "Create customizable illustrations with attractive designs that are made visually through high creativity"
    },
  ]
  return (
    <div className='w-screen flex items-center'>
      {/* left */}
      <div className='w-[50%] flex flex-col items-start p-4 gap-[3vw]'>
        <h2 className='text-[2vw] font-semibold'>I will show you what our team do</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <Button text={"Learn More"} className={"bg-btnBg text-white"}/>
      </div>
      {/* right */}
      <div className='w-[58%] flex flex-wrap gap-4 p-2 '>
        {
          services.map((service,index)=>(
            <ServiceCard ttl={service.ttl} desc={service.desc} icn={service.icn}/>
          ))
        }
      </div>
    </div>
  );
}

export default ServiceSection;
