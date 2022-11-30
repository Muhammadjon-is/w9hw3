import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const TvShow = () => {
   const [show, setSHow] = useState([])

   const fetchTv = () => {
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a1586095&s=tv+show&y=2022")
.then(resp => {
    return resp.json()
})
.then(shows => {
    setSHow(shows.Search)
})
   }
   useEffect(() => {
    fetchTv()
   })
   console.log(show);
    return (
        <div className='container-fluid'>
        <div className='row'>
            {show.map((tv) => (
        <div class="col-sm-6 col-md-2">
    <div class="card card-poter">
     <img class="card-img-top" src={tv.Poster} alt="Card image cap"/>
     <div class="card-body">
       <h5 class="card-title">{tv.Title}</h5>
       <p class="card-text">{"Year: "+tv.Year}</p>
       <a href="#" class="btn btn-primary">{"ID: " +tv.imdbID}</a>
     </div>
   </div>
           </div>
           ))}
              
        </div>
       </div>
  )
}

export default TvShow