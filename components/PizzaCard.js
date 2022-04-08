import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const PizzaCard = ({ data }) => {
  return (
    <div className='cursor-pointer' >
      <Link href={`/product/${data._id}`} passHref>
        <Image src={data.img} alt='Za' width="500" height="500" />
      </Link>

      <h1 className='text-xl font-bold text-red-600'>{data.title}</h1>
      <p className='font-bold text-gray-600'>${data.prices[0]}</p>
      <p className='text-gray-600'>{data.desc}</p>
    </div>
  )
}

export default PizzaCard