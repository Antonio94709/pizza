import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { PhoneIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <div className="flex  h-24 justify-between bg-red-600 px-10 text-center">
      <div className="flex items-center text-center ">
        <div className="m-3 h-8 w-8 rounded-lg bg-white ">
          <PhoneIcon className='text-red-600 w-6 ml-1 mt-1'/>
        </div>
        <div className="text-white">
          <div className="text-xs">ORDER NOW!</div>
          <div className="text-xl font-bold">090 897 8789</div>
        </div>
      </div>
      <div className="flex p-0 text-center">
        <ul className="flex list-none items-center text-center text-white ">
          <li className="m-5 font-medium">Homepage</li>
          <li className="m-5 font-medium">Products</li>
          <li className="m-5 font-medium">Menu</li>
          <h1 className="uppercase ">Pizzaria</h1>
          <li className="m-5 font-medium">Events</li>
          <li className="m-5 font-medium">Blog</li>
          <li className="m-5 font-medium">Contact</li>
        </ul>
      </div>
      <div className="">
        <Link href="/Cart" passHref>
        <div className=" mt-8 h-4 w-7" >
          <ShoppingCartIcon className="text-white" />
          <div className="absolute mt-3 top-1.5 right-8 w-5 rounded-lg bg-white  text-sm font-bold text-red-500">
            {quantity}
          </div>         
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
