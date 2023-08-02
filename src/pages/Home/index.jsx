import { Container, Movie, MovieList } from "./style";


const Home = () => {

    const movies = [
        {
            id: 1,
            title: 'Batman',
            image_url:'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg'
        },
        {
            id: 2,
            title: 'Avengers',
            image_url:'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg'
        },
        {
            id: 3,
            title: 'Spider-Man',
            image_url:'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg'
        }
    ]

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return(
                        <Movie>
                            <a href="http://google.com"><img src={movie.image_url} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;