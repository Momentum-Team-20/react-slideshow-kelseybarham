import filmData from './data/film-data.json'

export function Slideshow() {
    return (
    <>
        <Slide
            filmTitle={filmData[0].title}
            filmOriginalTitle={filmData[0].original_title}
            key={filmData[0].id}
            releaseDate={filmData[0].release_date}
            description={filmData[0].description}
            coverImage={filmData[0].image}
        />
    
    </>
    )
}

const Slide = ({ filmTitle, filmOriginalTitle, releaseDate, description, coverImage}) => {
    return (
        <div className='slide'>
            <h1>{filmTitle}</h1>
            <h2>{filmOriginalTitle}</h2>
            <p>{releaseDate}</p>
            <p>{description}</p>
            <img src={coverImage} alt='Movie Poster' />
        </div>
    )
}