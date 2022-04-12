import React from 'react'
import Image from "next/image"
import { useDispatch, useSelector } from 'react-redux'
import Paypal from "../components/Paypal"
import { useState } from 'react'


const Cart = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  return (
    <div className='flex p-10'>
      <div className='' style={{ flex: "2" }}>
        <table className='w-full text-cente r'>
        <tbody>
        <tr>
            <th >Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </tbody>
          <tbody>
          {cart.products.map((data) => (
            <tr key={data._id}>
              <td>
                <div>
                  <Image src={data.img} alt="zaa" height="50" width="50" />
                </div>
              </td>
              <td>
                <span className='font-medium text-red-600 '>
                  {data.title}
                </span>
              </td>
              <td>
                <span>
                  {data.extra.map(extra => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </span>
              </td>
              <td>
                <span>
                  ${data.price}
                </span>
              </td>
              <td>
                <span>
                  {data.quantity}
                </span>
              </td>
              <td>
                <span className='font-medium'>
                  ${data.price * data.quantity}
                </span>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className='flex-1'>
        <div className='w-3/4 max-h-72 bg-slate-800 p-10 pt-3 flex flex-col justify-between text-white'>
          <p className='uppercase'>cart Total</p>
          <div>
            <b>Subtotal:</b>${cart.total}
          </div>
          <div>
            <b>DIscount:</b>$00.00
          </div>
          <div>
            <b>Total:</b>${cart.total}
          </div>
          {open ? (
            <div className='mt-2 flex flex-col'>
              <button className='py-1 my-2 rounded cursor-pointer mt-5 bg-white text-teal-700 font-bold uppercase '>Cash On delivery</button>
              <Paypal />
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className='uppercase bg-white text-red-600 font-bold'>Checkout now!</button>
          )}


        </div>
      </div>
    </div>
  )
}

export default Cart

// 1.05