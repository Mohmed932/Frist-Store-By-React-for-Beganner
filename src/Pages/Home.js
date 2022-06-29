import React from 'react'
import Drsess from '../component/Drsess/Drsess'
import Prodect from '../component/Prodect/Prodect'
import SummerSale from '../component/SummerSale/SummerSale'



const Home = () => {
  return (
    <div className='Home'>
       <SummerSale/>
       <Prodect />
       <Drsess/>
    </div>
  )
}

export default Home