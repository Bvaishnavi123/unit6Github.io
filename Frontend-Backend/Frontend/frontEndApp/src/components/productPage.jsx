import {useState,useEffect} from 'react'
import axios from 'axios'

export const ProductPage = ()=>{
    const [products,setProduct] = useState([])
    // console.log(products)
    const getData = async()=>{
        try{
            let res = await fetch('http://localhost:5000/entity')
            let data = await res.json()
            setProduct(data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        // axios.get('http://localhost:5000/entity').then(({data}) =>{
        //     console.log('hii',data)
        //     setProduct(data)
        // })
        getData()
    },[])
    // console.log('hii')
    return (
        <>
        <h1>Product page</h1>
        </>
    )
}