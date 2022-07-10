import { useState } from "react";
export const Folder = ({ data }) => {
 
  const [expand, setExpand] = useState(false);
   if(data.isFolder=="true"){
    return (
      <>
      
           <div>
           <div
             onClick={() => {
               setExpand(!expand);
             }}
           >
             {data.name} <br />
           </div>
   
         <div style={{display:expand?"block":"none",padding:'10px'}}>
         {data.items.map((fol) => {
             return <Folder data={fol}/>
           })}
          
         </div>
        {/* { console.log(data.items)} */}
         </div>
     
      </>
    );
   }else{
    return <div>{data.name}</div>
   }
  
  
  
};
