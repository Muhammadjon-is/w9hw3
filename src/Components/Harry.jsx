// import axios from "axios";
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Harry = () => {
    const  [harry, SetHarry] = useState([])
 
 const fetchFilms = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a1586095&s=harry%20potter ")
    .then(resp => {
        return resp.json()
    })
    .then(films => {
        SetHarry(films.Search)
    })
 }
useEffect(() => {
    fetchFilms()
})
console.log(harry);
    return (
    <div className='container-fluid'>
     <div className='row'>
        {harry.map((poter) => (
     <div class="col-sm-6 col-md-2">
 <div class="card card-poter">
  <img class="card-img-top" src={poter.Poster} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{poter.Title}</h5>
    <p class="card-text">{"Year: "+poter.Year}</p>
    <a href="#" class="btn btn-primary">{"ID: " +poter.imdbID}</a>
  </div>
</div>
        </div>
        ))}
           
     </div>
    </div>
  )
}

export default Harry