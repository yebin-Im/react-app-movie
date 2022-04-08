import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, genres}) {
    return (
        <div className={styles.container}>
          <Link to ={`/movie/${id}`} className={styles.connect}>
          <div className={styles.box}>
            <img src={coverImg} alt={title}></img>
            <h2 className={styles.title}>
            <span>{title}</span>
              </h2>
          </div>
          <ul>
            {genres.map(g => <li key={g} className={styles.list}>{g}</li>)}
          </ul>
          </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string), 
}

export default Movie;
