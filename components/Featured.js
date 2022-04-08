import React from 'react'
import Image from 'next/image'
import { PhoneIcon } from '@heroicons/react/outline'

import Link from 'next/link'
import Slider from "react-slick";

const Feature = () => {
  const images = ['/Images/Zep.png', '/Images/Zep.png', '/Images/Zep.png']

  return (
    <div className=" uppercase  flex flex-col" style={{height: "60vh"}} >
        <div className='m-auto'>
        <p>welcome to Pizzatia</p>
        <p>Best Zaa in ze world</p>
        <Link href="#" >ORDER NOW</Link>
        </div>
        <Image src="/Images/product(1).jpg" width="200" height="200" objectFit='cover'/>
      {/* <PhoneIcon className='w-7' />
      <div>
        <div className='flex'>
          {images.map((img,i)=> (
            <Image src="/Images/Zep.png" className='' width="500" height="500" key={i} alt="zaa" />
          ))} 
        </div>
      </div>
      <PhoneIcon className='w-7'/> */}
     </div>
  // )
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className='bg-blue'>
//       <h2> Single Item</h2>
//       <Slider {...settings}>
//         <div>
//           <Image src="/Images/slides/slide(1)" width="200" height="200"/>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
   );
    }

    const Featured = () => {
     
      
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 10000,
      };
      return (
        <div className="h-36 text-black dark:text-white text-left bg-gradient-to-t from-gray-300 dark:bg-gradient-to-t dark:from-black ">
          <div className="mx-8 pb-2">
            <h2 className="font-bold text-4xl"> Latest News</h2>
            <Slider {...settings}>
              <div>
                <p>bread</p>
              </div>
              <div>
                <p>tea</p>
              </div>
            </Slider>
    
          </div>
        </div>
      )
    }

export default Featured
