import React from 'react'
import Image from "next/image"
import { CashIcon, CheckIcon, GiftIcon, ShoppingBagIcon } from '@heroicons/react/outline'

const Order = () => {
    return (
        <div className='flex py-10'>
            <div style={{ flex: "2" }}>
                <div>
                    <table className='w-full text-center'>
                        <tr>
                            <th >Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>
                                <span className='font-medium text-red-600 '>
                                    090586789435
                                </span>
                            </td>
                            <td>
                                <span>
                                    John Doe
                                </span>
                            </td>
                            <td>
                                <span>
                                    Elton st. 212-23 LA
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
                <div className='flex justify-around w-5/6 mt-5'>
                    <div className=''>
                        {/* <CashIcon className='h-7 w-7' /> */}
                        <span>Payments</span>
                        <div>
                            <CheckIcon className='h-7 w-7 text-teal-500'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        {/* <GiftIcon className='h-7 w-7' /> */}
                        <span>Preparing </span>
                        <div>
                            <CheckIcon className='h-7 w-7 text-teal-500'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        {/* <p className='h-7 w-7' /> */}
                        <span>Delivering</span>
                        <div>
                            <CheckIcon className='h-7 w-7 text-teal-500'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        {/* <CashIcon className='h-7 w-7' /> */}
                        <span>Delivered</span>
                        <div>
                            <CheckIcon className='h-7 w-7 text-teal-500'/>
                        </div>
                    </div>
                </div>
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
                    <button disabled className='uppercase bg-white text-teal-600 cursor-not-allowed font-bold'>paid!</button>
                </div>
            </div>
        </div>
    )
}

export default Order