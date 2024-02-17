import './style.scss'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProduct from './relatedProduct/RelatedProduct'
import { baseUrl } from '../../constant';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../fetures/cart/cartSlice';
import {useDispatch} from 'react-redux'
function ProductDetail() {
  const [quantity,setQuantity]=useState(1)
  const {id}=useParams()
  const dispatch=useDispatch()
  const {data}=useFetch(`/api/products?populate=*&[filters][id]=${id}`)
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={baseUrl+data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
          </div>
          <div className="right">
            <span className="name"> {data?.[0]?.attributes?.title} </span>
            <span className="price"> &#8377;{data?.[0]?.attributes?.price}</span>
            <span className="desc">{data?.[0]?.attributes?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={()=>{
                  setQuantity(prev=>prev==1?1:prev-1)
                }}>-</span>
                <span>{quantity}</span>
                <span onClick={()=>{
                  setQuantity(prev=>prev+1)
                }}>+</span>
              </div>
              <button className='add-to-cart-button' onClick={()=>{
                  dispatch(addToCart({
                    quantity:quantity,
                    id:id,
                    data:data
                  }))
                  setQuantity(1)
              }}> 
                <FaCartPlus size={20}/>
                Add To Cart
              </button>
            </div>

            <span className="divider"></span>
            <div className="info-items">
              <span className="text-bold">
                Category :
              <span className="text">
                {data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.Title}
              </span>
              </span>
            </div>
            <div className="info-items">
              <span className="text-bold">
                Share :
              <span className="social-icons">
                <FaFacebookF size={16}/>
                <FaInstagram size={16}/>
                <FaTwitter size={16}/>
                <FaLinkedinIn size={16}/>
                <FaPinterest size={16}/>
              </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProduct productId={id} categoryId={data?.[0]?.attributes?.categories?.data?.[0]?.id}/>
      </div>
    </div>
  )
}

export default ProductDetail