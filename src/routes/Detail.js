import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";
import {Link} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovieDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie); 
        setLoading(false);
        console.log(json);   
    };
    useEffect(() => {
        getMovieDetail();
    }, []);
    return (
        <div>
            {loading ? (
                <h1 className={styles.loader}>Loading...</h1>) : (
                    <div>
                        <header className={styles.detailHeader}><Link to={'/movie'} className={styles.back}>MOVIE</Link></header>
                        <MovieDetail 
                        key={movie.id}
                        coverImg={movie.large_cover_image} 
                        title={movie.title} 
                        genres={movie.genres}
                        trailer={movie.yt_trailer_code}
                        year={movie.year}
                        rating={movie.rating}
                        summary={movie.description_intro} 
                        />
                    </div>
        )}
        </div>
    );
}

export default Detail;