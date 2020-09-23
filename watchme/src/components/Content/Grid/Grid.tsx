import React from 'react'
import styles from './Grid.module.scss'
import { MOVIE_CATEGORIES } from '../../../constants/variables'
import Row from './Row'
import { useSelector } from 'react-redux'
import { MoviesSelectors } from '../../../redux/movies'
import { Movie } from '../../../@types/movie'
import Featured from './Featured'
import isEmpty from 'lodash/isEmpty'

const Grid = () => {
    const movies = useSelector(state => MoviesSelectors.getMovies(state))
    const featured = useSelector(state => MoviesSelectors.getFeatured(state))
    return (
        <div className={styles.tableContainer}>
            {!isEmpty(featured) && <Featured movie={featured} />}
            {Object.keys(MOVIE_CATEGORIES).map((category, index) => (
                <Row
                    key={index}
                    movies={movies.filter(
                        (movie: Movie) =>
                            movie.category.attributes.label ===
                            MOVIE_CATEGORIES[category]
                    )}
                    category={MOVIE_CATEGORIES[category]}
                />
            ))}
        </div>
    )
}

export default Grid
