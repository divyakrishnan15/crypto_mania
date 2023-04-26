import React, { useState, useEffect, useContext } from "react";
import { Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from "chart.js";
import { Line } from "react-chartjs-2";
import ApiContext from "../Api/UseContextApi";
import "./Insights.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CoinVsChangeLineChart() {
  const { data } = useContext(ApiContext);
  console.table("Insights CoinVsChangeLineChart = ", data);

  const [chartData, setChartData] = useState([]);


  useEffect(() => {
    setChartData(data);
    console.log("ls_data insights CoinVsMarketCapBarChart = ", data);
  }, [data]);

  const dataNew = {
    labels: chartData.map((e) => e.name),
    datasets: [
      {
        label: "Change",
        data: chartData.map((e) => e.change),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
    <div style={{border:"1px solid grey",width:"400px",padding:"5px 10px",display:"flex",justifyContent:"center",alignContent:"center",fontSize:"30px",color:"blue"}}>Coin Vs </div>
    <div className="chart" style={{width:"400px", position:"relative", marginBottom:"1%",padding:"1%"}}>
            <Line data={dataNew} width="400px" height="400px" />
    </div>
    </>
  );
}



