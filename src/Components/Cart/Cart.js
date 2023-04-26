import React from "react";
import { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import ApiContext from "../Api/UseContextApi";
import { useCart, useDispatchCart } from "./UseCartReducer";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import "./Cart.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";
import PaymentPage from "./PaymentPage";

const stripePromise = loadStripe(
  "pk_test_51MpG7YBOBMSoELOvjWtReBFTZQr7YJmVtLr7pX2JJg7zA5RCAT5cytBNHkx5foQBOcaKhZdtxRUjHE8l1iadlxbK00JQrxTUVf"
);

export default function Cart() {
  const [count, setCount] = useState(1);
  const [finalPrice, setFinalPrice] = useState(0)

  const [modalshow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalOpen = () => setModalShow(true);

  const { data } = useContext(ApiContext);
  console.log("CAARRRTT cart.js  data 1=== ", data);

  const items = useCart();
  console.log("CAARRRTT items==", items);

  const dispatch = useDispatchCart();


  
  // Total Price
  useEffect(() => {
    const totallist = document.getElementsByClassName("cart-totalprice")
    console.log("totallist = ",totallist)

    console.log("document.getElementsByClassName cart-qty innerHTML = ",document.getElementsByClassName("cart-qty").innerHTML)

    let temp = 0;
    for(let x of totallist){
      console.log("total list content == ",x.innerHTML);
      temp += parseFloat(x.innerHTML)
    }
    console.log("temp ----------------", temp)
    setFinalPrice(temp)
  },[count])
  // },[...document.getElementsByClassName("cart-qty").innerHTML,...document.getElementsByClassName("cart-totalprice").innerHTML])





  if (items.length === 0) {
    return <h1>Cart is empty</h1>;
  }

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE_FROM_CART" }, index);
  };


  return (
    <div className="cart-product-wrapper">
      <h1>Cart:</h1>
      <table className={modalshow ? "cart-table-modal" : "cart-table"}>
        <tbody className="cart-tbl-body">
          <tr className="cart-th-wrapper">
            <th className="cart-table-th">ID</th>
            <th className="cart-table-th">Icon</th>
            <th className="cart-table-th">Name</th>
            <th className="cart-table-th">Symbol</th>
            <th className="cart-table-th">Price</th>
            <th className="cart-table-th">Quantity</th>
            <th className="cart-table-th">Total Price</th>
          </tr>
          {items &&
            Object.entries(items).map((i, index) => {
              // console.log("i ===== ", i);
              return (
                <tr className="cart-tbl-row" key={index}>
                  <td>{index}</td>
                  <td className="cart-tbl-data">
                    <img src={i[1].iconUrl} width="30px" />
                  </td>
                  <td className="cart-tbl-data">
                    <strong>{i[1].name}</strong>
                  </td>
                  <td className="cart-tbl-data">{i[1].symbol}</td>
                  <td className="cart-tbl-data">
                    $ {parseFloat(i[1].price).toFixed(2)}
                  </td>

                  <td className="cart-qty">
                    <AiFillMinusCircle
                      onClick={() => {
                        console.log("minus cout = ", count);
                        i[1].qty<=0 ? setCount((i[1].qty)) : setCount((i[1].qty -= 1));
                      }}
                      color="red"
                      size={"20px"}
                    />

                    <td className="cart-tbl-data">
                      <input
                        className="cart-qty-input cart-qty"
                        type="number"
                        value={i[1].qty}
                        onChange={(e) => e.target.value}
                      />
                    </td>

                    {/* ////////INCREMENT---------- */}
                    <AiFillPlusCircle
                      onClick={() => {
                        console.log("plus ");
                        setCount((i[1].qty += 1));
                        // finalPriceFunc()
                      }}
                      color="lightgreen"
                      size={"20px"}
                    />

                    <FaTrashAlt
                      onClick={() => handleRemove(i[1].rank)}
                      color="lightblue"
                      size={"20px"}
                    />
                  </td>

                  <td className="cart-totalprice">
                    {/* ${" "} */}
                    {(parseFloat(i[1].price).toFixed(2) * i[1].qty).toFixed(2)}
                  
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <footer className={modalshow ? "cart-footer-modal" : "cart-footer"}>
      {/* <footer className="cart-footer"> */}
        <div>
          FINAL Price : {""}$ {parseFloat(finalPrice).toFixed(2)}
        </div>

        <button
          onClick={() => {
            handleModalOpen();
          }}>
          Checkout and Pay
        </button>
        

        <Modal className="modal-main" isOpen={modalshow}>
          <button onClick={handleModalClose}>x</button>
          <Elements stripe={stripePromise}>
            <PaymentPage />
            <CheckoutForm />
          </Elements>
        </Modal>
      </footer>

      {/* <Elements stripe={stripePromise}> */}
      {/* <Payment /> */}
      {/* <CheckoutForm /> */}
      {/* </Elements> */}
    </div>
  );
}
