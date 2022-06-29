/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import './GetProdect.css'
import { Link } from 'react-router-dom';

const GetProdect = () => {
    const [data,setdata] = useState([]);
    const [Search,setSearch] = useState('');
    useEffect(()=>{
        const getAll = () => {
            fetch('https://fakestoreapi.com/products')
            .then(req=>req.json())
            .then(res=>setdata(res))
        }
        getAll();
    },[data])
  return (
   <div className='setProdect'>
   <div  className='setinput'>
     <input type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
     <FaSearch/>
   </div>
   <div className='GetProdect'>
      {data.filter(val=>{
        if(Search===''){
          return val
        }else if(val.title.localLawerCase().includes(Search.localLawerCase())){
          return val
        }
      }).map(({id,image})=>
       <div key={id} className='popularProducts'>
       <img src={image} className='photooo'/>
       <div>
          <div className='icon'>   
          <i class="fa-regular fa-heart"></i>  
          <i class="fa-solid fa-share"></i>
       </div>
         <Link to={`/ProdecApi/${id}`}><button className='SHOPNOW'>SHOP NOW</button></Link>
       </div>
     </div>
     )}
   </div>
</div>
  )
}

export default GetProdect