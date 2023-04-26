import React from 'react';
import './Insights.css'
import CoinVsPricePieChart from './CoinVsPricePieChart'
import CoinVsMarketCapBarChart from './CoinVsMarketCapBarChart'
import CoinVsChangeLineChart from './CoinVsChangeLineChart'
import ApiContext from "../Api/UseContextApi";



export default function Insights() {

  return (
    <>
    <div className='chart-cards grid-container'>
      <div class="grid-item"><CoinVsPricePieChart/></div>
      <div class="grid-item"><CoinVsMarketCapBarChart/></div>
      <div class="grid-item"><CoinVsChangeLineChart/></div>
    </div>
    </>
  )
}
