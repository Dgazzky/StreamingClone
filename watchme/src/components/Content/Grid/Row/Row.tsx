import React from 'react'
import styles from './Row.module.scss'
import Panel from '../Panel'
// import { Carousel } from 'antd'
import { useSelector } from 'react-redux'
import { MoviesSelectors } from '../../../../redux/movies'
import { Movie } from './../../../../@types/movie'

interface RowProps {
    category: string
}

const Row = ({ category }: RowProps) => {
    const movies = useSelector(state =>
        MoviesSelectors.getMoviesByCategory(state, category)
    )

    return (
        <div className={styles.row}>
            <span className={styles.rowTitle}>{category} </span>
            <div className={styles.moviesContainer}>
                {/* <Carousel effect="fade"> */}
                {movies.map((movie: Movie) => (
                    <Panel movie={movie} />
                ))}
                {/* </Carousel> */}
            </div>
        </div>
    )
}

export default Row
