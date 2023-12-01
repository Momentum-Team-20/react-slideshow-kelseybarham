import { useState } from 'react'
import './App.css'
import filmData from './data/film-data.json'
import { Slideshow } from './Slideshow'


function App() {
  const [index, setIndex] = useState([filmData[0]])



  return (
    <>
    <h1>Studio Ghibli slideshow</h1>
    <Slideshow/>
    <div className='buttons'></div>
    <button>Start Over</button>
    </>
  )
}

export default App




// const FilmCard = ({ filmOriginalTitle, filmTitle }) => {
//   return (
//     <div className="card">
//       <h1>{filmTitle}</h1>
//       <p>{filmOriginalTitle}</p>
//     </div>
//   )
// }

//if you wanted to iterate through all the data:
// {filmData.map((film) => (
//   <FilmCard
//   filmTitle={film.title}
//   filmOriginalTitle={film.original_title}
//   key={film.id}
//   />
// ))}