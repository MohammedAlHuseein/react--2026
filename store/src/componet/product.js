import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/product.css'
import SabProduct from './subproduct'


export default function Product(){

    const[count,setcount]=useState(0)


    // props 

    //list 

const subproduct=[
    {id:1, name:'product',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdwzjIT4TTJfxDJdirBI9_Lrc01fITyAwPg&s',price:20 ,discription: 'new prod 1' },
    {id:2, name:'product',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdwzjIT4TTJfxDJdirBI9_Lrc01fITyAwPg&s',price:20 ,discription: 'new prod 2' },
    {id:3, name:'product',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdwzjIT4TTJfxDJdirBI9_Lrc01fITyAwPg&s',price:20 ,discription: 'new prod 3' }

]



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

            <div>
                <ul>
                    {subproduct.map((item)=> (<li key={item.id}>
                        <div>
                            <h3>{item.name}</h3>
                            <img width={100} src={item.image}/>
                            <Link to='/subprod' state={item}>View</Link>
                            
                        </div>
                        </li>))}
                </ul>

            </div>

            {/* <SabProduct x={subproduct}/> */}
          
        </div>
        
          
        
      
    )
}