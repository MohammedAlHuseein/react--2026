
import { useLocation } from "react-router-dom";
export default function Contact(){
 const location=useLocation()
 const data=location.state
    return(
        <div>
            <h2>information</h2>
            <h3> Name : {data.Name}</h3>
            <h3> Email : {data.email}</h3>
            <h3> phone : {data.Phone}</h3>
        </div>
    )
}