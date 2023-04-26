import React,{useState} from 'react'
import logo1 from '../../Assets/logo/logo1.png'
import './Navbar.css';
import {Link} from 'react-router-dom'
import Toggle from '../Theme/Toggle';
import {FiMenu , FiX} from 'react-icons/fi' 
import {useCart} from "../Cart/UseCartReducer"

export default function Navbar() {
  const[open,setOpen]=useState(false);

  const items = useCart();

  const handleClick = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <nav className='header'>

        <div>
        <Link to="/" className="logo_name">
            <img className="logo" src={logo1} alt="logo alt" />
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <h1 className='AppName'>Crypto Mania</h1>
        </Link>
        </div>

        <div className='nav-menuclose-icons' onClick={handleClick}>
          {open ? <FiMenu/> :<FiX/>}
        </div>

      {/* <div className='nav-menu-wrapper'>         */}
        <div className={open ? 'nav-middle-items active' : 'nav-middle-items'}>
                <Link to="/market" onClick={closeMenu} className='nav-middle-item' >Market</Link>
                <Link to="/orders" onClick={closeMenu} className='nav-middle-item' >Order</Link>
                <Link to="/insights" onClick={closeMenu} className='nav-middle-item' >Insights</Link>
                <Link to="/openai" onClick={closeMenu} className='nav-middle-item' >OpenAI</Link>
            </div>

        <div className={open ? 'nav-right-items active' : 'nav-right-items'}>
          <hr style={{borderColor:"rgb(238, 157, 6, 0.5)", width:"40%", marginLeft:"20px"}}/>
             <Link to="/login" onClick={closeMenu} className='nav-right-item'>Login</Link>
             <Link to="/cart" onClick={closeMenu} className='nav-right-item'>Cart({items.length})</Link>
             
             {/* <Link to="/cart" onClick={closeMenu} className='nav-right-item'>Cart</Link> */}
             <Toggle/>
        </div>
      {/* </div> */}

        

    </nav>
  )
}
