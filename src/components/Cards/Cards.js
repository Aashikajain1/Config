import React from 'react'
import './../Cards/Cards.css'

function Cards({s,title, price, description,theme}) {
  return (
    <div className='ms-0'>
    <div className={`cards ${theme}`}>
        <img src={s} className="img"/>
        <h1 className="fs-2 text-body-white text-center">{title}</h1>
        <div className="d-flex justify-content-evenly">
        <h2> PRICE= {price}</h2>
        <button className="btn btn-outline-dark text-white border border-light">Order Now</button>
        </div>
        <h5 className="fs-6 text-white-50 text-center mt-3">{description}</h5>
        
    </div>
    </div>
  )
}

export default Cards