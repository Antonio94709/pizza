import React from 'react'
import Image from "next/image"
import { useDispatch,useSelector } from 'react-redux'


const Cart = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex p-10'>
      <div className='' style={{ flex: "2" }}>
        <table className='w-full text-center'>
          <tr>
            <th >Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div>
                <Image src="/Images/Zep.png" alt="zaa" height="50" width="50" />
              </div>
            </td>
            <td>
              <span className='font-medium text-red-600 '>
                Coralzo
              </span>
            </td>
            <td>
              <span>
                Double , ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span>
                $19.99
              </span>
            </td>
            <td>
              <span>
                2
              </span>
            </td>
            <td>
              <span className='font-medium'>
                $39.80
              </span>
            </td>
          </tr>
        </table>
      </div>
      <div className='flex-1'>
        <div className='w-3/4 max-h-72 bg-slate-800 p-10 pt-3 flex flex-col justify-between text-white'>
          <p className='uppercase'>cart Total</p>
          <div>
            <b>Subtotal:</b>$79.60
          </div>
          <div>
            <b>DIscount:</b>$00.00
          </div>
          <div>
            <b>Total:</b>$79.60
          </div>
          <button className='uppercase bg-white text-red-600 font-bold'>Checkout now!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart