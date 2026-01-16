import React from 'react'
import {Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Navbar from './Compontent/Navbar'
import AboutMe from './Pages/AboutMe'
import Footer from './Compontent/Footer'
import NotFund from './Pages/NotFund'
import Product from './Pages/Product'
import Man from './Pages/Man'
import Woman from './Pages/Woman'
import LocalContact from './Pages/LocalContact'
import GlobalContact from './Pages/GlobalContact'
import AboutDetail from './Pages/AboutDetail'
import Navbar2 from './Compontent/Navbar2'
const App = () => {
  return (
    <div >
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:id' element={<AboutDetail/>}/> 
        <Route path='/contact' element={<Contact/>}>
        <Route path='LocalContact'element={<LocalContact/>}/>
        <Route path='GlobalContact'element={<GlobalContact/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/man' element={<Man/>}/>
        <Route path='/woman' element={<Woman/>}/>
        <Route path='*' element={<NotFund/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
