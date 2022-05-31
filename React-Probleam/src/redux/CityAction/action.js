import axios from 'axios'

export const ADD_CITY  = "ADD_CITY"
export const SORTDATA = 'SORTDATA'
export const SORTDATADEC = 'SORTDATADEC'
export const DELETECITY = "DELETECITY"

export const addCity = (data)=>{
    return {
        type: ADD_CITY,
        payload : data
    }
}
export const sortData = (data)=>{
    return {
        type : SORTDATA,
        payload:data
    }
}

export const deleteCity = (id)=>{
    return {
        type : DELETECITY,
        payload : id
    }
}

export const getAllCity = ()=> async(dispatch)=>{
    axios.get('http://localhost:8000/cities').then(({data})=>{
        dispatch(addCity(data))
    })

}