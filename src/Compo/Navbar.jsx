import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <>
   
      <nav className={`nav my-.5 navbar-${props.mode} bg-${props.mode} `}>
      <h4 className={`text-${props.mode==='light'?'dark':'light'}`}>TextUtils</h4>
        <ul>
        
            <Link  to="/"><li >Home</li></Link>
            <Link to="/about"><li >About</li></Link>
            {/* <NavLink to="#"><li>Service</li></NavLink> */}
        </ul>
        <div className={` hi form-check  form-switch text-${props.mode==='light'?'dark':'light'} my-1`} >
  <input className="form-check-input " onClick={props.toggelMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.btn}</label>
</div>
      </nav>
    
 </>

  )
}

export default Navbar
