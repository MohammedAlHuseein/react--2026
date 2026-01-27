import { useState } from 'react'
import '../css/product.css'
export default function Product(){

    const[count,setcount]=useState(0)
    return(
       
        <div id="product">
            <h1> product </h1>

            <p> this is count = {count} </p>
            <button onClick={()=>
                setcount(count+1)
            }> Increase </button>
            <br></br>
            <button onClick={()=>
                setcount(count-1)
            }>Decrease</button>
            <br></br>
            <button onClick={()=>
                setcount(count*2)
            }>Double </button>
            <br></br>
            <button onClick={()=>
                setcount(0)
            } >Rest</button>
        </div>
        
          
        
      
    )
}