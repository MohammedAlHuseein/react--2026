import { useState } from "react"
import { useLocation } from "react-router-dom"



export default function SabProduct(){
    const location=useLocation()
    // console.log(location);
    
    const [subproductfrommain,setsubproductfrommain]=useState(location.state)
    console.log(location.state);
    
    
    return (
        <div>
        <h2> this is product </h2>
        <h3>{subproductfrommain.name}</h3>
<img width={100} src={subproductfrommain.image}/>
<h4>{subproductfrommain.price}</h4>
<h4>{subproductfrommain.discription}</h4>

        </div>
    )
}