import React, { useState, useEffect, useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ApiContext from "../Api/UseContextApi";
import "./Insights.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CoinVsPricePieChart() {
  const { data } = useContext(ApiContext);
  console.table("Insights CoinVsPricePieChart = ", data);

  const [chartData, setChartData] = useState([]);


  useEffect(() => {
    setChartData(data);
    console.log("ls_data insights CoinVsMarketCapBarChart = ", data);
  }, [data]);


  const dataNew = {
    labels: chartData.map((e) => e.name),
    datasets: [
      {
        label: "Price",
        data: chartData.map((e) => e.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div style={{border:"1px solid grey",width:"400px",padding:"5px 10px",display:"flex",justifyContent:"center",alignContent:"center",fontSize:"30px",color:"blue"}}>Coin Vs Price</div>
      <div className="chart" style={{width:"400px", position:"relative", marginBottom:"1%",padding:"1%"}}>
              <Pie data={dataNew} options={{mainAspectRatio:false}} width={"300px"} height={"300px"} />
      </div>
    </>
  );
}



