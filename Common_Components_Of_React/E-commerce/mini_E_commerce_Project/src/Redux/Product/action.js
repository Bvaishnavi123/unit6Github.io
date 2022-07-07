export const STORE_DATA = 'STORE_DATA';
export const IS_LOADONG = 'IS_LOADONG';
export const IS_ERROR = 'IS_ERROR';
export const IS_CURRENTPRO_LOADONG = 'IS_CURRENTPRO_LOADONG';
export const IS_CURRENTPRO_ERROR = 'IS_CURRENTPRO_ERROR';
export const STORE_CURRPRO_DATA = 'STORE_CURRPRO_DATA';

import axios from 'axios'

export const loadingHandle = ()=>({
    type : IS_LOADONG
})

export const errorHandle = ()=>({
    type:IS_ERROR
})

export const storeData = (payload)=>(
    {
        type : STORE_DATA,
        payload:payload
    }
)

export const getData = ()=>(dispatch)=>{
  dispatch(loadingHandle())  
   axios.get('http://localhost:8000/products').then(({data})=>{
     dispatch(storeData(data))
   }).catch((err)=>{
     dispatch(errorHandle())
   })
}

export const currProductLoadingHandle = ()=>({
  type : IS_CURRENTPRO_LOADONG
})

export const currProductErrorHandle = ()=>({
  type:IS_CURRENTPRO_ERROR
})

export const currProductStoreData = (payload)=>(
  {
      type : STORE_CURRPRO_DATA,
      payload:payload
  }
)

export const getCurrentProductData = (id)=>(dispatch)=>{
dispatch(currProductLoadingHandle())  
 axios.get(`http://localhost:8000/products/${id}`).then(({data})=>{
   dispatch(currProductStoreData(data))
 }).catch((err)=>{
   dispatch(currProductErrorHandle())
 })
}


