import {useState,useEffect} from 'react'
import axios from 'axios'
import  {useSearchParams} from 'react-router-dom'

export const ProductPage = ()=>{
    const [products,setProduct] = useState([])
    const [params,setParams] = useSearchParams();
     const [page , setPage] = useState(1)
    const [sort , setSort] = useState("1")
    const [productBrand ,setProductBrand] = useState([]);
    const [total,setTotal] = useState(null)
    //console.log(products)
    const getData =()=>{
        
            axios({
                url:"http://localhost:5000/entity",
                method :'GET',
                params: {
                    page,
                    sort,
                    productBrand
                }
            }).then(({data}) => {
                console.log(data)
                setProduct(data.products)
                setTotal(data.totalPage)
            }
            )
        
    //     try{
    //         let res = await fetch('http://localhost:5000/entity')
    //         let data = await res.json()
    //         setProduct(data.products)
    //     }catch(err){
    //         console.log(err)
    //     }
    }
    useEffect(() => {
     getData()

    },[page,sort,productBrand])

    useEffect(() => {
        setParams({
            page,
            sort,
            productBrand
        })
   
       },[page,sort,productBrand,setParams])
    // console.log('hii')
   
    return (
        <>
        <div>
            <select onChange={(e)=>setSort(e.target.value)}>
                <option value="1">ASC</option>
                <option value="-1">DEC</option>
            </select>
            <select onChange={(e)=>setProductBrand(e.target.value)}>
                
                <option value="">filter By Brand</option>
                <option value="SkinCeuticals">SkinCeuticals</option>
                <option value="Sulwhasoo">Sulwhasoo</option>
                <option value="Medik8">Medik8</option>
                <option value="EltaMD">EltaMD</option>
            </select>
            {products.map((e)=>{
                return <div style={{border:"1px solid black",width:"20%",marginLeft:"10px",padding:"10px"}}>
                    <img style={{width:"100px"}}src={e.productPic}></img>
                    <p>{e.productBrand}</p>
                    <p>{e.productName}</p>
                    <p>{e.priceOfProduct}</p>
                    
                </div>
            })}
            <button disabled={page==1} onClick={()=>setPage(page-1)}>PREV</button>
            <button disabled={page==total} onClick={()=>setPage(page+1)}>NEXT</button>

        </div>
        </>
    )
}