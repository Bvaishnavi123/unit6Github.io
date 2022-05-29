import { FeedbackItem } from "./FeedbackItems"


export const FeedBackList = (props)=>{
    if(!props.feedback || props.feedback.length === 0){
        return <p>No Feedback</p>
    }
    return(
        <div>{props.feedback.map((e)=>{
            return (
               <FeedbackItem key={e.id} item={e}/>
            )
        })}</div>
    )
}