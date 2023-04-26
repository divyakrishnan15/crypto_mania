import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UseContextApi} from './Components/Api/UseContextApi'
import {UseThemeContextReducer} from './Components/Theme/UseThemeContextReducer'
// import {CartReducerPage} from './Components/Cart/UseCartReducer'
import { CartProvider } from './Components/Cart/UseCartReducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UseThemeContextReducer>
   
    <UseContextApi>
    {/* <CartReducerPage> */}
    <CartProvider>
        <App />
        {/* </CartReducerPage> */}
     </CartProvider>
     </UseContextApi>
     
  </UseThemeContextReducer>

);

