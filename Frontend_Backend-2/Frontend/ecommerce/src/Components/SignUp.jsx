import { useState } from "react"
import axios from 'axios'

export const SignUp = ()=>{

    const [user,setUser]= useState({
        name:'',
        gender:'',
        email:'',
        password:'',
        address:[]
       
    })
    const [addAddress,setaddAddress]= useState({
        houseNo:'',
        street:'',
        landmark:'',
        pincode:'',
        country:''
        
    })
   
    const handleChange = (e)=>{
       //console.log(e.target.value)
       setUser({
           ...user,
           [e.target.name] : e.target.value
       })
    }
    const handleChangeadd =(e)=>{
        setaddAddress({
            ...addAddress,
            [e.target.name] : e.target.value
        })
        // user.address.push(addAddress)
    }
    const handleSubmitadd =(e)=>{
        e.preventDefault()
        console.log('added')
       setUser({
           ...user,
           ...user.address.push(addAddress)
})
      

    }
    const handlePostData =(e)=>{
        e.preventDefault();
    //  console.log(user)
      const payload = user;
      axios.post('http://localhost:5000/user/create',payload)
    }

    return (
        <>
        
        <form onSubmit={handlePostData}>
             <h1>SignUp</h1>
            <input type="text" placeholder="Enter your name" name="name" onChange={handleChange}/>
            <select name="gender" onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input type="text" placeholder="Enter your email address" name="email" onChange={handleChange}/>
            <input type="text" placeholder="Enter your password" name="password" onChange={handleChange}/>
            <input type="submit" value="Submit"/> 
            
        </form>
        <form onSubmit={handleSubmitadd}>
            <h1>Address</h1>
        <input type="text" placeholder="Enter your HouseNo" name="houseNo" onChange={handleChangeadd}/>
           
            <input type="text" placeholder="Enter your street" name="street" onChange={handleChangeadd}/>
            <input type="text" placeholder="Enter your landmark" name="landmark" onChange={handleChangeadd}/>
            <input type="text" placeholder="Enter your pincode" name="pincode" onChange={handleChangeadd}/>
            <input type="text" placeholder="Enter your country" name="country" onChange={handleChangeadd}/>
             <input type="submit" value="ADD"/>
            
        </form>
        
        
        
        </>
       
    )
}