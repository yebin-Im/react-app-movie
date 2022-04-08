import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { useState, useEffect} from "react";
import styles from "./MovieDetail.module.css";
import TwitchPlayer from "react-player/twitch";

function MovieDetail({coverImg, title, rating, genres, trailer, year, summary}) {
    return (
      <div>
          
        <div>
            <img src={coverImg} alt={title} className={styles.largeImg}></img>
              <h2 >
                <span className={styles.detailTitle}>{title}</span>
              </h2>
              <div className={styles.detailcontainer}>
              <ul className={styles.detailList}>
                Genre: {genres.map(g => <li key={g} className={styles.list}>{g}</li>)}
                <li className={styles.list}>Release Date: {year}</li>
                <li className={styles.list}>Rating: {rating}</li>
                <li className={styles.list}><p className={styles.list}>Summary: {summary.length > 235 ? `${summary.slice(0, 300)}...` : summary}</p></li>
              </ul>
              <button onClick={()=> window.open(`https://www.youtube.com/watch?v=${trailer}`)}>Trailer</button>
              </div>
        </div>
      </div>
    );
}

MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string), 
}

export default MovieDetail;