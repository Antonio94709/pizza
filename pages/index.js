import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import Featured2 from '../components/Featured2'
import PizzaList from '../components/PizzaList'



const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Pizzaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Featured/> */}
      {/* <Featured2/> */}
      {/* <Featured  /> */}
      <PizzaList/>
    </div>
  )
}

export default Home
