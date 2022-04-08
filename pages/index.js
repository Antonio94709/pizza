import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import Featured2 from '../components/Featured2'
import PizzaList from '../components/PizzaList'



const Home = ({ pizzalist }) => {
  return (
    <div className="">
      <Head>
        <title>Pizzaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Featured/> */}
      {/* <Featured2/> */}
      {/* <Featured  /> */}
      <PizzaList pizzalist={pizzalist} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products")

  return {
    props: {
      pizzalist: res.data,
    }
  }
}

export default Home
