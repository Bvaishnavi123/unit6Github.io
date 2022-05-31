import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { updateCity } from "../redux/CityAction/action"



export const UpdateCity = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()
    console.log(id)
    const [City,setCity] = useState({
       Country:'',
       City:'',
       Population:''
    })

    const changeHandler = (event)=>{
        event.preventDefault();
         setCity({
            ...City,
            [event.target.name] : event.target.value
        })
    }
    
   

   
    return (
        <div>
            <input type="text" name="Country" placeholder="Add a country" onChange={changeHandler}/>
            <input type="text" name="City" placeholder="Add a city" onChange={changeHandler}/>
            <input type="text" name="Population" placeholder="Add a Population" onChange={changeHandler}/>
            <button onClick={()=>{dispatch(updateCity(City,id)),navigate('/')}}>Update</button>
        </div>
    )
}