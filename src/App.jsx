import './App.css'
import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Main from './component/Main/Main'
import rasm2 from './img/rasm3.jpg'
import Section from './component/section/Section'
import About from './component/About/About'
import rasm1 from './img/abut.png'
import Prodact from './component/prodact/Prodact'
import Search from './component/Search/Search'
import Footer from './component/Footer/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Main 
    h1='Making time a good time by making food the good food.'
    p='There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,'
    btn='Order Now'
    btn1='Food Details'
    url={rasm2}
    />

  <Section  
  p='Features'
  h1='Food with a New Passion'/>
   <About
      url={rasm1}
      h3='About us'
      h1='Food Stalls with Persons but  to  Product marketing plane
      catlogues etc to. '
      p='There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
      equipment  make your marketing plane Effective.'
      btn='Read More'
      />
<Prodact
span='Menu'
h1='Food Full of treaty Love'
p='There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers,'
/>

<Search
 h1='Contact '
 p='Food Stalls with Persons but also specialized equipment, Skills to manage.'
/>


<Footer/> 

     
    </>
  )
}

export default App
