import React, { useState, useEffect, useContext } from "react";
import { Chart as ChartJS, CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
import ApiContext from "../Api/UseContextApi";
import "./Insights.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CoinVsMarketCapBarChart() {
  const { data } = useContext(ApiContext);
  console.table("Insights CoinVsMarketCapBarChart= ", data);

  const [chartData, setChartData] = useState([]);



  useEffect(() => {
    setChartData(data);
    console.log("ls_data insights CoinVsMarketCapBarChart = ", data);
  }, [data]);

  const dataNew = {
    labels: chartData.map((e) => e.name),
    datasets: [
      {
        label: "MarketCap",
        data: chartData.map((e) => e.marketCap),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <div style={{border:"1px solid grey",width:"400px",padding:"5px 10px",display:"flex",justifyContent:"center",alignContent:"center",fontSize:"30px",color:"blue"}}>Coin Vs MarketCap</div>    
    <div className="chart" style={{width:"400px", position:"relative", marginBottom:"1%",padding:"1%"}}>
            <Bar data={dataNew} options={{mainAspectRatio:false}} width="400px" height="400px" />
    </div>
    </>
  );
}



