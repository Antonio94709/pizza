import React from 'react'
import Image from "next/image"


const PizzaCard = () => {
  return (
    <div className='cursor-pointer' >
        <Image src="/Images/product2.jpg" alt='Za' width="500" height="500"/>
        <h1 className='text-xl font-bold text-red-600'> Peperoni Zaa </h1>
        <p className='font-bold text-gray-600'>$19.90</p>
        <p className='text-gray-600'>aadasd s as asd asd sad asd asd ssad sadas asd </p>
    </div>
  )
}

export default PizzaCard