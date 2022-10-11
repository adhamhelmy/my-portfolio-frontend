import { Link } from "react-router-dom"

import  React  from "react"
import pdf from './adham-helmy.pdf'
import { render } from "react-dom"
const Navbar = () => {
    

    
    return(
        <nav className="navbar navbar-dark bg-primary">
            <a href="/" className="navbar-brand">
                <h2>HomePage</h2>
            </a>
            <ul className="nav"  >
                <li className="nav-item">
                <Link to={"/projects"} className="nav-link" style={{color:"white"}}>
                    Projects
                </Link>
                </li>
                <li className="nav-item">
                <a href={pdf} className="nav-link" style={{color:"white"}} target="_blank" rel="noreferrer">
                    Resume
                </a>
                </li>
                <li className="nav-item" >            
                <Link to={"/login"} className="nav-link" style={{color:"white"}}>
                    Login
                </Link>
                </li>
            </ul>
        </nav>
    )
    
    
  }
  export default Navbar;