import React,{ useContext } from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar'
// import ApiContext from './Components/Api/Context'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Home from './Components/Home/Home'
import Orders from './Components/Orders/Orders'
import Insights from './Components/Insights/Insights'
import Market from './Components/Market/Market'
import OpenAi from './Components/OpenAi/OpenAi'
import Login from './Components/Login/Login'
import Cart from './Components/Cart/Cart';
import {themeContext} from './Components/Theme/UseThemeContextReducer'

function App() {
  
  const darkTheme = useContext(themeContext);
  console.log("APP darkTheme=== ", darkTheme);
  const darkMode = darkTheme.state.darkMode;
  console.log("AAPP darkMode = ",darkMode)

  return (
    <div className="App"
    style={{
      background: darkMode ? "white" : "black",
      color: darkMode ? "black" : "white",
    }}
    >
      
     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/orders" element={<Orders/>}/>
          <Route exact path="/insights" element={<Insights/>}/>
          <Route exact path="/market" element={<Market/>}/>
          <Route exact path="/openai" element={<OpenAi/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
