import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="container">
         <div >
                <h1 >Legal</h1>
                <ul >
                    <li><a className="nav-item" href="#">Terms And Conditions</a></li>
                    <li><a className="nav-item" href="#">cookie Policy</a></li>
                    <li><a className="nav-item" href="#">Private Policy</a></li>
                </ul>
            </div>
            <div >
                <h1 className="text-warning-emphasis">Company</h1>
                <ul >
                    <li><a className="nav-item" href="#">About us</a></li>
                    <li><a className="nav-item" href="#">Our Services</a></li>
                    <li><a className="nav-item" href="#">Contact Us</a></li>
                    <li><a className="nav-item" href="#">Login</a></li>
                    <li><a className="nav-item" href="#">Reviews</a></li>
                </ul>
            </div>
            <div >
                <h1 >Legal</h1>
                <ul >
                    <li><a className="nav-item" href="#">Terms And Conditions</a></li>
                    <li><a className="nav-item" href="#">cookie Policy</a></li>
                    <li><a className="nav-item" href="#">Private Policy</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Footer