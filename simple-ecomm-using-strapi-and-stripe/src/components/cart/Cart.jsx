import './style.scss'
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from './cartItem/CartItem'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js'
import {stripeKey} from '../../constant'
import { makePaymentRequest } from '../../utils/api';
import axios from 'axios';

function Cart({setShowCart}) {
  const navigate=  useNavigate()
    const {cartItems} =useSelector(state=>{
        return state.cart
      })
      const subTotal=cartItems.reduce((acc,next)=>{
        return acc +(next?.data?.[0]?.attributes?.price*next?.quantity)
      },0)
      const stripePromise=loadStripe(stripeKey)

      const config = {
        method: 'post',
        url: 'https://api.example.com/post-endpoint',
        data: postData,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      };
      
      const handlePayment=async()=>{
        try {  
            const stripe=await stripePromise;
            console.log(stripe,"stripe");
            const res=await axios.post('http://localhost:1337/api/orders',{

            })
            console.log(res,"res");
            await stripe.redirectToCheckout({
                sessionId:res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error);
        }
      }
  return (
    <div className="cart-panel">
        <div className="opac-layer" onClick={()=>{
                        setShowCart(false)
                    }}></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shooping Cart</span>
                <span className="close-btn" onClick={()=>{
                        setShowCart(false)
                    }}>
                    <MdClose/>
                    <span className="text" >Close</span>
                </span>
            </div>
{ !cartItems.length ?(<div className="empty-cart">
                <BsCartX/>
                <span>
                    NO Products In Cart.
                </span>
                <button className='return-cta' onClick={()=>{
                    navigate('/')
                    setShowCart(false)
                }}>
                    RETURN TO SHOP
                </button>
            </div>):
            (<>
            <CartItem/>
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">
                        Subtotal :
                    </span>
                    <span className="text total">&#8377;{subTotal}</span>
                </div>
                <div className="button">
                    <button className='checkout-cta' onClick={handlePayment}>
                        Checkout
                    </button>
                </div>
            </div>
            </>)
            }
        </div>
    </div>
  )
}

export default Cart