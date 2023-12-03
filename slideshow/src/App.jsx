import { useState } from 'react'
import './App.css'
import filmData from './data/film-data.json'
import { Slideshow } from './Slideshow'


function App() {
  const [index, setIndex] = useState(0)
  

  const next = () => {
    setIndex(index + 1);
  }
  // console.log(`index in app ${index}`)

  const back = () => {
    setIndex(index - 1);
  }

  const startOver = () => {
    setIndex(0)
  }

  return (
    <>
    <div className='mainBody'>
    <Slideshow index={index}/>
    <div className='buttons'>
    <button onClick={startOver} disabled={index==0}>Start Over</button>&nbsp;&nbsp;
    <button onClick={next} disabled={filmData.length - 1 ==index}>Next</button>&nbsp;&nbsp;
    <button onClick={back} disabled={index==0}>Back</button>
    </div>
    </div>
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