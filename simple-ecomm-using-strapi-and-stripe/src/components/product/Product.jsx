import './product.scss'
import  {baseUrl} from '../../constant'
import {useNavigate} from 'react-router-dom'
function Product({price,img,title,id}) {
  const Navigate=useNavigate()
  function handleClick(){
    Navigate(`/productDetail/${id}`)
  }
  return (
   <div className="product-card" onClick={handleClick}>
    <div className="thumbnail">
    <img src={baseUrl+img.data[0].attributes.url} alt="" />
    </div>
    <div className="product-details">
      <span className="name">{title}</span>
      <span className="price">&#8377;{price}</span>
    </div>
   </div>
  )
}

export default Product