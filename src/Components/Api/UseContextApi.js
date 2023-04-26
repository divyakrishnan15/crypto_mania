import React, { useState, createContext, useEffect } from "react";


const ApiContext = createContext();

export function UseContextApi({ children }){
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try{
    const response = await fetch(
      "https://api.coinranking.com/v2/coins/?limit=10",
      {
        method: "GET",
        headers: {
          "x-access-token":
            "coinrankingd4a64f6d1fae43b006f1f69214d5904ad7a3dc26c48e8669",
        },
      }
    );
    let res = await response.json();
    
    //to change string to int in sparkline
    Object.entries(await res.data.coins).map((i) => {
      i[1].sparkline=i[1].sparkline.map(Number)
    })
    console.log("res====",res)
    setData(await res.data.coins);
  } catch (error) {
    console.log(error);
  }
    }
    fetchData()
  }, []);

  return (
    <ApiContext.Provider value={{ data }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;