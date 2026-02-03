import { useState } from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
export default function Home (){
const [showImage,setshowimage]=useState(false)
const handleclick=()=>{
    setshowimage(!showImage)
}
const user = {
    Name :'Mohammad' , 
    email : 'Mhmad@gmail.com',
    Phone  : '+962777441638'
}



    return (
        <div id="home" >
         <button onClick={handleclick}>{showImage?'hide':'show'} </button>
         {
            showImage && <img width={200} src='https://s3.amazonaws.com/images.seroundtable.com/google-rainbow-texture-1491566442.jpg'  />
         }
         <Link to="/contact" state={user}>Go to contact</Link>
        </div>
    )
}