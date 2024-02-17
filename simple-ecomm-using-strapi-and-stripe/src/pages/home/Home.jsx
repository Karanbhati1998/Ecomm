import { useEffect, useState } from 'react'
import Banner from './baneer/Banner'
import Category from './catergory/Category'
import Products from './products/Products'
import './style.scss'
import {fetchDataFromApi} from '../../utils/api'
import {useSelector,useDispatch} from 'react-redux'
import {addCategories,addProducts} from "../../fetures/ecommData/ecommDataSlice"
function Home() {
  const dispatch=useDispatch()
  const {categories,products} =useSelector(state=>{
    return state?.ecommDataSlice
  })
  const getCategories=async()=>{
    const data=await fetchDataFromApi("/api/categories?populate=*")
    dispatch(addCategories(data))
  }
  const getProducts=async()=>{
    const data=await fetchDataFromApi("/api/products?populate=*")
    dispatch(addProducts(data))
  }
  useEffect(()=>{
    getCategories()
    getProducts()
  },[])
  return (
    <div> 
      <Banner/>
      <div className="main-content">
        <div className="layout">
      <Category categories={categories}/>
      <Products headingText="Popular Products" products={products?.[0]}/>
        </div>
      </div>
    </div>
  )
}

export default Home