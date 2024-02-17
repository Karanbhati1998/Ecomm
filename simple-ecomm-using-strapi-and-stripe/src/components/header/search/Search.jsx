import './search.scss'
import { MdClose } from "react-icons/md";
import { baseUrl } from '../../../constant';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
function Search({setShowSearch}) {
    const[query,setQuery]=useState('')
    const navigate=useNavigate()
    let {data} =useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    if(!query.length){
        data=null
    }
  return (
    <div className="search-modal">
        <div className="form-field">
            <input type="text" 
            placeholder='Search for products'
            value={query}
            onChange={(e)=>{
                setQuery(e.target.value)
            }}
            autoFocus
            />
           <MdClose
              onClick={()=>{
             setShowSearch(false)
            }}
            />
        </div>
        <div className="search-result-content">
            <div className="search-results">
                {
                    data && data.map(item=>(
                        <div className="search-result-item" onClick={()=>{
                            navigate(`/productDetail/${item?.id}`)
                            setShowSearch(false)

                }}>
                    <div className="img-container">
                        <img src={baseUrl+item?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item?.attributes?.title}</span>
                        <span className="desc">{item?.attributes?.desc}</span>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Search