import { Carousel } from 'bootstrap'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
    const [home, setHome] = useState([])

    const fetchHome = () => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a1586095&s=2022&plot=full")
        .then(res => {
            return res.json()
        })
        .then(hm => {
            setHome(hm.Search)
        })
    }
    useEffect(() => {
        fetchHome()
    })
    console.log(home);
  return (
    <div className='container-fluid'>
     
      <div className='row'>
        {home.map((main) => (
  <div class="col-lg-6 mb-4">
  <div class="card card-main" >
      <img class="card-img-top" src={main.Poster} alt=""/>

      <div class="card-body">
          <h5 class="card-title">{main.Title}</h5>
          <p class="card-text">
              Some quick example text to build on 
              the card title and make up the bulk 
              of the card's content.
          </p>

          <a href="#" class="btn btn-outline-primary btn-sm">
              {main.Type}
          </a>
          <a href="#" class="btn btn-outline-secondary btn-sm">
             {main.Year}</a>
      </div>
  </div>
</div>
        ))}
    
      </div>
      
    </div>
  )
}

export default Home