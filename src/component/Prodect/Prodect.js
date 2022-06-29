/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../../data'
import './Prodect.css'

const Prodect = () => {
  return (
    <div className='categories'>
    {categories.map(({id,title,img})=>(
      <div className='prodectcategories' key={id}>
        <img src={img} className='img' alt=''/>
        <h3 className='title'>{title}</h3>
        <Link to={`/prodect/${id}`}><button className='button'>SHOP NOW</button></Link>
      </div>
  ))}
    </div>
  )
}

export default Prodect
