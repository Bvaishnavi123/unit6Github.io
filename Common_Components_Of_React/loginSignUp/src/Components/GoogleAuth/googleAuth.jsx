import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
export const GoogleAuth =(props)=>{
    function handleCallbackResponse(response){
        console.log('Encoded JWT Id token:'+response.credential);
        var userID = jwt_decode(response.credential);
        console.log('userID:',userID)
        props.setgoogleAuthUser(userID)
    }
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id:'1018777173719-po881ts69fnll531n7v5ksti1g22v10t.apps.googleusercontent.com',
            callback:handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme:'outline',size:'large'}
        )

    },[])
    return(
        <>
            <div id="signInDiv"></div>
        </>
    )
}