import React, { useEffect, useState } from 'react'
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from '../cart/Cart';
import './style.scss'
import Search from './search/Search';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
function header() {
  const[showCart,setShowCart]=useState(false)
  const[showSearch,setShowSearch]=useState(false)
  const[scrolled,setScrolled]=useState(false)
  const navigate=useNavigate()
  const location=useLocation()
  const {cartItems} =useSelector(state=>{
    return state.cart
  })
  const totalQty=cartItems.reduce((acc,next)=>{
    return acc +(next?.quantity)
  },0)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
function handleScroll(){
  const scrollHeight=window.scrollY
  if(scrollHeight>200){
    setScrolled(true)
  }else{
    setScrolled(false)
  }
}
useEffect(()=>{
window.addEventListener('scroll',handleScroll)
return  ()=>{
  window.removeEventListener('scroll',handleScroll)

}
},[])
  return (
    <>
   <header  className={`main-header ${scrolled ? "sticky-header" : ""}`}
   >
    <div className="header-content">
      <ul className='left'>
        <li onClick={()=>{
        navigate('/')
      }}>Home</li>
        <li>About</li>
        <li>Categories</li>
      </ul>
      <div className="center" onClick={()=>{
        navigate('/')
      }}>
      JSDEVSTORE
      </div>
      <div className="right">
            <TbSearch onClick={()=>{
              setShowSearch(true)
            }}/>
            <AiOutlineHeart/>
        <span className="cart-icon" onClick={()=>{
          setShowCart(prev=>!prev)
        }}>
          <CgShoppingCart/>

        { totalQty? <span>{totalQty}</span> :''}
        </span>
      </div>
    </div>
   </header>
   {
    showCart && 
   <Cart setShowCart={setShowCart}/>
   }
   {
    showSearch && 
   <Search setShowSearch={setShowSearch}/>
   }
    </>
  )
}

export default header