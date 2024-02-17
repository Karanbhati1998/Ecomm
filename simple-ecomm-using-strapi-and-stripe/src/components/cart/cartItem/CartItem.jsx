import './cartItem.scss'
import { MdClose } from "react-icons/md";
import prod from '../../../assets/products/earbuds-prod-1.webp'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,productQuantity } from '../../../fetures/cart/cartSlice';
import { baseUrl } from '../../../constant';
function CartItem() {
  const dispatch=useDispatch()
  const cartData =useSelector(state=>{
    return state.cart.cartItems
  })
  return (
    <div className="cart-products">
      {
        cartData && cartData.map(data=>{
      return <div className="cart-product" key={data.id}>
        <div className="img-container">
        <img src={baseUrl+data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
        </div>
        <div className="prod-details">
          <span className="name"> {data?.data?.[0]?.attributes?.title} </span>
          <MdClose onClick={()=>{
          dispatch(removeFromCart(data?.id))
        }}/>
            <div className="quantity-buttons">
                <span onClick={()=>{
                  dispatch(productQuantity({
                    id:data?.id,
                    type:'dec'
                  }))
                }}>-</span>
                <span>{data?.quantity}</span>
                <span onClick={()=>{
                  dispatch(productQuantity({
                    id:data?.id,
                    type:'inc'
                  }))
                }}>+</span>
              </div>
              <div className="text">
                <span>{data?.quantity}</span>
                <span>x</span>
                <span className='highlight'>&#8377;{data?.data?.[0]?.attributes?.price}</span>
                <span>=</span>
                <span className='highlight'>&#8377;{data?.data?.[0]?.attributes?.price  * data?.quantity}</span>
              </div>
          
        </div>
      </div>

        })
      }
    </div>
  )
}

export default CartItem