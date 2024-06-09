import React from 'react'
import './Home.css'
import Navbar from './../../components/Navbar/Navbar'
import {CARD,CARD2} from './../../config'
import Cards from './../../components/Cards/Cards'

function Home() {
  return (
    <div>
      <Navbar /><br></br>
      <div>
      <div className="container"> 
      {
        CARD.map((cardObj,index)=>{
          
          const {s,title, price, description} = cardObj;
          console.log(cardObj);
          return <Cards s={s} title={title} 
          price={price} 
          description={description} 
          theme={'black'}/>                
        })
      }</div>
      <div className="container">
       {
        CARD2.map((cardObj,index)=>{
          const {s,title, price, description} = cardObj;
          return <Cards s={s} title={title} 
          price={price} 
          description={description}
        black={index}
          theme={'black'}/>                
        })
      }
      </div>
      </div>
      </div>
  )
}

export default Home