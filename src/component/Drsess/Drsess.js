/* eslint-disable jsx-a11y/alt-text */
import React from 'react' 
import './Drsess.css'
import {popularProducts} from '../../data'
import { Link } from 'react-router-dom'

const Drsess = () => {
  return (
    <div className='Drsess'>
       {popularProducts.map(({id,img})=>
       <div key={id} className='popularProducts'>
         <img src={img} className='photooo'/>
         <div>
            <div className='icon'>   
              <i class="fa-regular fa-heart"></i>  
              <i class="fa-solid fa-share"></i>
            </div>
            <Link to={`/home/${id}`}><button className='SHOPNOW'>SHOP NOW</button></Link>
         </div>
       </div>
       )}
    </div>
  )
}

export default Drsess
