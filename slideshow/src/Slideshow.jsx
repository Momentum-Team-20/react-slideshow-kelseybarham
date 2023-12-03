import filmData from './data/film-data.json'

export function Slideshow({index, time, dogBreed}) {
    // console.log(`index in slideshow ${index}`)
    return (
    <>
        <Slide
            filmTitle={filmData[index].title}
            filmOriginalTitle={filmData[index].original_title}
            key={filmData[index].id}
            releaseDate={filmData[index].release_date}
            description={filmData[index].description}
            coverImage={filmData[index].image}
        />
    </>
    )
}

const Slide = ({ filmTitle, filmOriginalTitle, releaseDate, description, coverImage}) => {
    return (
        <div className='slide'>
            <img src={coverImage} alt='Movie Poster' />
            <div className='filmTitle'><h1>{filmTitle}</h1></div>
            <div className='filmOriginalTitle'><h2>{filmOriginalTitle}</h2></div>
            <div className='releaseDate'><p>{releaseDate}</p></div>
            <div className='filmDescription'><p>{description}</p></div>
        </div>
    )
}

