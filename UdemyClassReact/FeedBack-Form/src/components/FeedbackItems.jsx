import {useState} from "react"
import { Card } from "./shared/Card";
export const  FeedbackItem = ({item})=>{
    return(
      
            <Card>
                <div className="num-display">{item.rating}</div>
                <div className="text-display">{item.text}</div>
                {/* <button onClick={handleCLick}>Click</button> */}
                </Card>

      
    )
}