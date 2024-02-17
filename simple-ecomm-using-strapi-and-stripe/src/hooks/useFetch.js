import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/api"
function useFetch(endpoint) {
    const[data,setData]=useState('')
    const makeApiCall=async()=>{
        const res= await fetchDataFromApi(endpoint)
        setData(res)
    }
    useEffect(()=>{
        makeApiCall()
    },[endpoint])
  return data;
}

export default useFetch