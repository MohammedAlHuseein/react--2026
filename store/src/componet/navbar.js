import '../css/nav.css'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <div id="nav">
            <ul>
                <li> <Link to='/'>Home</Link></li>
                   <li> <Link to='/prod'>product</Link></li>
                      <li> <Link to='/about'>about</Link></li>
                         <li> <Link to='/contact'>Contact</Link></li>
            </ul>

        </div>
    )
}