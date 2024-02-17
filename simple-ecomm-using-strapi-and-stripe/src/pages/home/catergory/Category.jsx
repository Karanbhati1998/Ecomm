import './category.scss'
import { useNavigate } from 'react-router-dom'
import {baseUrl} from '../../../constant'
function Category({categories}) {
  const navigate=useNavigate()
  return (
    <div className="shop-by-category">
      <div className="categories">
        {
          categories && categories?.[0]?.map((category)=>{
       return <div className="category" key={category.id} onClick={()=>{
        navigate(`/category/${category?.id}`)
       }}>
          <img src={baseUrl+category?.attributes?.img?.data[0]?.attributes?.url} alt="" />
        </div>
          })
      }
      </div>
    </div>
  )
}

export default Category