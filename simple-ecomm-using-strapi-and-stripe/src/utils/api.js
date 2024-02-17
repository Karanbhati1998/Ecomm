import axios from 'axios';
import {baseUrl,stripeToken} from '../constant'
const params={
    headers:{
        Authorization:"Bearer "+stripeToken
    }
}
export const fetchDataFromApi=async(url)=>{
try {
    const data=await axios.get(`${baseUrl}${url}`,params)
    return data.data;
} catch (error) {
    console.log(error);
    return error;
}
}
export const makePaymentRequest=axios.create({
    baseURL:baseUrl,
    headers:{
        Authorization:"Bearer "+stripeToken
    }
})
