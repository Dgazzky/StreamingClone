import React from 'react'
import styles from './Row.module.scss'
import Panel from '../Panel'
import { Movie } from './../../../../@types/movie'
import isEmpty from 'lodash/isEmpty'
import cx from 'classnames'
interface RowProps {
    category: string
    movies: Array<Movie>
}

const Row = ({ category, movies }: RowProps) => {
    return !isEmpty(movies) ? (
        <div className={styles.row}>
            <span className={cx(styles.rowTitle, 'theme')}>{category}</span>
            <div className={styles.moviesContainer}>
                {movies.map((movie: Movie) => (
                    <Panel key={movie.id.label} movie={movie} />
                ))}
            </div>
        </div>
    ) : (
        <></>
    )
}

export default Row
