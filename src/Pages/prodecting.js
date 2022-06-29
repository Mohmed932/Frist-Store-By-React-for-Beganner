/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {AllData} from '../../src/data'


const Prodect = ({setcount,count}) => {
    const [price,setprice] =useState(0);
    const [priceing,setpriceing] =useState(0);
    const [comment,setcomment] = useState('')
    const [message,setmessage] = useState([])
    const handelComments = () =>{
      setmessage([
        comment,
        ...message
      ])
      setcomment('')
    }
    const handeldelet = (val) =>{
      const deleteing =message.filter(data=>message.indexOf(data)!==message.indexOf(val))
      setmessage(deleteing)
    }
    const location = useLocation();
    const prodect = location.pathname.split('/')[2];
    
    const posts  = AllData.find((post)=>post.id.toString() === prodect);
  return (
    <div className='Prodect'>
       <img src={posts.image} className='img'/>
       <div className='datales'>
         <h3 className='hyper'>{posts.title}</h3>
         <p className='desc'>{posts.description}</p>
         <h4 className='price'>${priceing}</h4>
         <div className='color'>
           <h3 className='lor'>Color </h3>
           <span className='onecricle two'></span>
           <span className='onecricle three'></span>
           <h3 className='lor'>Size </h3>
           <select className='opaction'>
             <option>SM</option>
             <option>LR</option>
             <option>XL</option>
             <option>XXL</option>
           </select>
         </div>
         <div className='priceing'>
           <h1>
             <span style={{cursor: 'pointer'}} onClick={price===0?price===0:()=>setprice(price-1)||setpriceing(priceing-20)}>-</span>
             <span className='cont'>{price}</span>
             <span style={{cursor: 'pointer'}} onClick={()=>setprice(price+1)||setpriceing(priceing+20)}>+</span>
           </h1>
           <button className='buttom' onClick={()=>setcount(count+1)}>Add To Card</button>
         </div>
         <div className='Comment'>
           <div className='comant'>
             <input type='text' className='Addacomment' placeholder='Add A Comment' value={comment} onChange={(e)=>setcomment(e.target.value)}/>
             <button  className='handelComments' onClick={handelComments}>Share</button>
           </div>
            {message.length>=1?message.map(val=>(
              <div className='posting'>
                <p className='leave leavpp'>{val}</p>
                <button className='handelComments leavbtn' onClick={(e)=>{
                  e.preventDefault()
                  handeldelet(val)
                }}>Delete</button>
              </div>
            )):<p className='leave'>please leave A Comment</p>}
         </div>
       </div>
    </div>
  )
}

export default Prodect