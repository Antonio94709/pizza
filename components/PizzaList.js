import React from 'react'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className='p-7 mx-12 flex flex-col text-center items-center'>
        <h1 className='uppercase font-extrabold text-2xl py-7'>THE BEST PIZZa in the world</h1>
        <p className='text-lg text-gray-700 pb-7' style={{width:"70%"}}>sfasf a asdfa fasfasfasfd afaasdf afdsfasdf asfsdfsadfdasfasdf dadfsdfa adfadsf afdf dsaf dfafa dsafsdfs fdsaf sadfdsafsdafsdsadfdfa fdsf d adsasf sdaf sdfa sdfsadf sdaf dsfasdfdsaf </p>
        <div className='grid grid-cols-1 gap-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList