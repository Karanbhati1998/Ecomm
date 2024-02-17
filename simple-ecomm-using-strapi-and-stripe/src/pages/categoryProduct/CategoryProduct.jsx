import './categoryProduct.scss'
import Products from '../home/products/Products'
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
function CategoryProduct() {
  const {id}=useParams()
const {data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  return (
    <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
              {data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.Title}
            </div>
            <Products products={data} innerPage={true}/>
        </div>
    </div>
  )
}

export default CategoryProduct