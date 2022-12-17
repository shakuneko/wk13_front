import React, { useEffect, useState } from 'react';
import { getAllAriticle } from "../api"
import { Link } from "react-router-dom"
import Card from '../components/card'


const Home = () => {
  const [article,setArticle] = useState([])
  useEffect(()=>{
    setAllArticle()
  },[])

  async function setAllArticle() {
    const data = await getAllAriticle()
    setArticle(data)
  }
    
  return (
    <div className='Home'>
     
      <div className='title'>
        <Link to="/">
          <h1 className='title1'>- SEVENTEEN -</h1>
        </Link>
        <p>Say the name - seventeen</p>
      </div>
    {
      article.map((item)=>(
        <Card key={item.id} data={item}/>
      ))
    }
     <div className='fooder'>
        <p className='fooder1'> @saythename_17</p>
      </div>
    </div>
  )
}

export default Home