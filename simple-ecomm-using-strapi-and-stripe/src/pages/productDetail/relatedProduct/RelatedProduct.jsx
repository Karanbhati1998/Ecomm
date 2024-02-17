import './realtedProduct.scss'
import Products from '../../home/products/Products'
import useFetch from '../../../hooks/useFetch'
function RelatedProduct({productId,categoryId}) {
  const {data}=useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
  return (
   <div className="related-product">
    <Products headingText="Reated Products" products={data} />
   </div>
  )
}

export default RelatedProduct