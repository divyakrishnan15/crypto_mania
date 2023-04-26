import React from 'react'
import Carousel from './Carousel'
import btc from '../../Assets/coins/btc.png'
// import eth from '../../Assets/coins/eth.png'
import doge from '../../Assets/coins/doge.png'
import home3 from '../../Assets/HomePage/home3-removebg-preview.png'
import home5 from '../../Assets/HomePage/home5.png'
import './Home.css'
import { motion } from 'framer-motion';

export default function Home() {
  const transition = { duration: 2, type: "spring" };
  return (

    <div className='HomePage'>

      <div className='Section1'>

        <div className='sec1-left'>
           <h1>The Most Trusted</h1>
           <h1><span style={{color:"purple"}}>Crypto</span> Platform</h1>
           <div>Cryptography, encryption process of transforming information</div>
           <div>referred to as plaintext using done.</div>
        </div>


        <div className='sec1-right'>
          <img className="image-main" src={home3} alt="a.png"/>
          <motion.img
          initial={{ left: "-100px" }}
          whileInView={{ left: "120px" }}
          transition={transition}   
          src={btc}
          alt=""
        />

         <motion.img
          initial={{ left: "700px" }}
          whileInView={{ left: "550px" }}
          transition={transition}
          src={doge}
          alt=""
        />
        </div>
      </div>

      <div className='carousel'>
           <Carousel/>
      </div>  
    </div>
  )
}
