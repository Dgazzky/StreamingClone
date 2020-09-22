import React from 'react'
import styles from './Grid.module.scss'

import { Movie } from '../../../@types/movie'
import Panel from './Panel'

interface SearchGridProps {
    foundMovies: Array<Movie>
}
const SearchGrid = ({ foundMovies }: SearchGridProps) => {
    return (
        <div className={styles.searchGrid}>
            {foundMovies.map((el: Movie) => (
                <div className={styles.panelContainer}>
                    <Panel movie={el} />
                </div>
            ))}
        </div>
    )
}

export default SearchGrid
