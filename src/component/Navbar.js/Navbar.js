import React from 'react'
import './Navbar.css'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { Link } from 'react-router-dom';


const Navbar = ({count,user}) => {
  return (
    <div className='Navbar'>
      <div className='left'>
        <select className='select'>
          <option>EN</option>
          <option>AR</option>
          <option>SP</option>
          <option>FR</option>
          <option>GR</option>
        </select>
        <div className='Sear'>
          <Link to='/ProdecApi'><input className='input' type='text' placeholder='Search'/></Link>
          <FaSearch style={{margin:'10'}}/>
        </div>
      </div>
      <div className='center'>Kajol</div>
      <div className='right'>
        <Link to='/'><h2>REGASTER</h2></Link>
        {user?<Link to='/'><h2>SIGUP</h2></Link>:<Link to='/login'><h2>SIGIN</h2></Link>}
        <Link to='/'><i class="fa-solid fa-cart-shopping"></i></Link>
        {count===0?<p className='can'></p>:<p className='count'>{count}</p>}
      </div>
    </div>
  )
}

export default Navbar