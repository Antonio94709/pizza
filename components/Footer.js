import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="relative flex w-full flex-1 ">
      <div className="">
        <Image
          src="/Images/Zep.png"
          alt="Za"
          className=""
          objectFit="fill"
          width="500"
          height="500"
        />
      </div>
      <div className="relative flex-1 bg-gray-900 justify-between " >
        <div className="flex">
          <div className="flex-1 pl-10 pt-14 uppercase">
            <h1 className="text-2xl font-extrabold text-gray-400">
              Oh yes we <br /> did.the lama <br />
              pizza,well
              <br />
              baked slice of
              <br />
              pizza
            </h1>
          </div>
          <div className=" flex-1 pl-10 pt-14">
            <h1 className="pb-5 font-extrabold uppercase text-yellow-500">
              Find our restaurants
            </h1>
            <div className="text-white">
              <p className="pb-1">
                3424 R.Mandella street <br /> New York ,2342 <br /> (929)
                213-2323
              </p>
              <p className="pb-1">
                3424 R.Mandella street <br /> New York ,2342 <br /> (929)
                213-2323
              </p>
              <p className="pb-1">
                3424 R.Mandella street <br /> New York ,2342 <br /> (929)
                213-2323
              </p>
              <p className="pb-1">
                3424 R.Mandella street <br /> New York ,2342 <br /> (929)
                213-2323
              </p>
            </div>
          </div>
          <div className="flex-1 pl-10  pt-14 uppercase">
            <h1 className="pb-5 font-extrabold uppercase text-yellow-500">
              Working hours
            </h1>
            <div className="text-white">
              <p>
                monday until friday
                <br />
                9:00-22:00
              </p>
              <p>
                saterday until sunday
                <br />
                12:00-24:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
