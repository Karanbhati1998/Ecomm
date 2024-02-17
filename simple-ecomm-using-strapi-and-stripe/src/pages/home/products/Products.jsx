import './products.scss'
import Product from '../../../components/product/Product'
function Products({innerPage,headingText,products}) {
  return (
    <div className="products-container">
     { !innerPage &&  <div className="sec-heading">
         {headingText}
        </div>}
            <div className="products">
                {
                  products && products?.map(product=>{
                    return <Product key={product.id} id={product.id} {...product.attributes}/>
                  })
                }
              
            </div>
    </div>
  )
}

export default Products