import React, { useState } from 'react'
import Image from 'next/image'
import { PhoneIcon } from '@heroicons/react/outline'
import axios from 'axios'


const Product = ({ pizza }) => {
  const [size, setSize] = useState(0)
 
  return (
    <div className="flex" style={{ height: '70vh' }}>
      <div className="relative h-full flex-1 items-center justify-center">
        <div className="h-1/2 w-4/5">
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="zaa" />
        </div>
      </div>
      <div className="m-auto ml-36 flex-1 ">
        <p className="pb-3 text-3xl font-bold">{pizza.name}</p>
        <span className="pb-10 text-lg font-semibold text-red-600 underline">
          ${pizza.prices[size]}
        </span>
        <p className="font-semibold text-gray-700">{pizza.desc}</p>
        <p className="pt-5 text-lg font-bold">Choose size</p>
        <div className="flex">
          <div onClick={() => setSize(0)}>
            <Image src="/Images/zasvg.png" width="50" height="50"/>
            {/* <PhoneIcon className="mx-8 h-6 w-6 cursor-pointer" /> */}
            <span className="top-0 right-0 rounded-lg bg-black p-1 text-xs text-white">
              Small
            </span>
          </div>
          <div onClick={() => setSize(1)}>
          <Image src="/Images/zasvg.png" width="70" height="70"/>
            <span className="rounded-lg bg-black p-1 text-xs text-white">
              Medium
            </span>
          </div>
          <div onClick={() => setSize(2)}>
          <Image src="/Images/zasvg.png" width="90" height="90"/>
            <span className="rounded-lg bg-black p-1 text-xs text-white">
              Large
            </span>
          </div>
        </div>
        <div className="pt-7">
          <p>Choose additonal topping</p>
          <div className="p-3 flex">
            <div className="mx-1">
              <input type="checkbox" id="double" name="double"  />
              <label htmlFor="double" className= "text-sm font-bold ml-1">Double ingredients</label>
            </div>
            <div className="mx-1">
              <input type="checkbox" id="cheese" name="cheese" className='' />
              <label htmlFor="cheese" className= "text-sm font-bold ml-1">Cheese sauce</label>
            </div>
            <div className="mx-1">
              <input type="checkbox" id="spicy" name="spicy"  />
              <label htmlFor="spicy" className= "text-sm font-bold ml-1">Spicy sauce</label>
            </div>
            <div className="mx-1">
              <input type="checkbox" id="garlic" name="garlic" />
              <label htmlFor="garlic" className= "text-sm font-bold ml-1">Garlic sauce</label>
            </div>
          </div>
          <div className='flex mt-5 '>
              <input type='number' defaultValue={1} className=" bg-gray-300 rounded w-10 h-8"/>
              <button className='h-8 text-center text-white ml-2 bg-red-600 p-1 rounded'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)

  return {
    props: {
      pizza: res.data,
    }
  }
}


export default Product
