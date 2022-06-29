import React, { useState } from 'react'
import './App.css'
import Nav from './component/Nav.js/Nav'
import Navbar from './component/Navbar.js/Navbar'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Prodect from './Pages/prodect/Prodect'
import Home from './Pages/Home'
import Tesharit from './Pages/Tesharit/Tesharit'
import SummerSaleing from './Pages/SummerSaleing'
import ProdecApi from './Pages/Api/ProdecApi'
import Prodecting from '../src/Pages/prodecting'
import Footer from '../src/component/Footer/Footer'
import Login from './Pages/Login'

const App = () => {
  const [count,setcount] = useState(0);
  const user = true
  return (
    <Router>
      <Nav/>
      <Navbar count={count} user={user}/>
       <Routes>
         <Route  path='/' element={<Home/>}/>
         <Route  path='/prodect/:id' element={user?<Prodect count={count} setcount={setcount}/>:<Navigate to='/login'/>}/>
         <Route  path='/home/:id' element={user?<Tesharit count={count} setcount={setcount}/>:<Navigate to='/login'/>}/>
         <Route  path='/SummerSale/:id' element={user?<SummerSaleing count={count} setcount={setcount}/>:<Navigate to='/login'/>}/>
         <Route  path='/ProdecApi' element={user?<ProdecApi/>:<Navigate to='/login'/>}/>
         <Route  path='/ProdecApi/:id' element={user?<Prodecting count={count} setcount={setcount}/>:<Navigate to='/login'/>}/>
         <Route  path='/login' element={<Login/>}/>
       </Routes>
       <Footer/>
    </Router>
  )
}

export default App
