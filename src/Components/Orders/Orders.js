import React, { useContext, useEffect } from "react";
import ApiContext from "../Api/UseContextApi";
import "./Orders.css";

// import {CartState} from "../Cart/UseCartReducer"

import { useCart, useDispatchCart } from "../Cart/UseCartReducer";

export default function Orders() {
  const { data } = useContext(ApiContext);
  console.log("ORDERSS api=== ", data);

  const dispatch = useDispatchCart();

  // const {state:{products}}=CartState();
  // console.log("ORDER.js cart products ==",products)
  // const {state} = CartState();
  // console.log("STATE ORDER.js === ",state)

  const items = useCart();
  console.log("ORDERS items==", items);

  const addToCart = (item) => {
    // console.log("useCart items", items);
    // console.log("ITEM orders.js=", item);
    if (items.length === 0) {
      item["qty"] = 1
      dispatch({ type: "ADD_TO_CART", item }); //1
    } else {
      console.log("items.length = ", items.length); //greater than 1
      item["qty"] = 1
      console.log("ITEm _--------------------------", item)

      let items2 = items
      Object.entries(items2).map((e) => {
        delete e["qty"]
      })
      console.log("ITEMS2 [[[[[[[[[[[[[[[[[[[", items2)
      if (!items2.includes(item)){
        dispatch({type:"ADD_TO_CART",item})
      }
    }
  };

  return (
    <>
      <div className="orders-name">Portfolio of COINS:</div>
      <div className="orders-main">
        {data &&
          Object.entries(data).map((coin) => {
            return (
              <div className="card" key={coin[1].uuid}>
                <img src={coin[1].iconUrl} alt="a" className="icon"></img>
                <div className="crypto-Name">{coin[1].name}</div>
                <div className="crypto-Symbol">{coin[1].symbol}</div>

                <div className="card-body">
                  <span className="card-body-left">Price : </span>

                  <div className="card-body-right">
                    ${parseFloat(coin[1].price).toFixed(2)}
                  </div>

                  <span className="card-body-left">MarketCap: </span>

                  <div className="card-body-right">{coin[1].marketCap}</div>

                  <span className="card-body-left">Rank : </span>

                  <div className="card-body-right">{coin[1].rank}</div>

                  <span className="card-body-left">Change : </span>

                  <div
                    className="card-body-right"
                    style={{
                      color: coin[1].change > 0 ? "lightgreen" : "red",
                      fontWeight: 500,
                      fontSize: "20px",
                    }}
                  >
                    {coin[1].change}
                  </div>
                </div>

                <div className="footer">
                  <button
                    onClick={() => addToCart(coin[1])}
                    className="AddtoCart center"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
