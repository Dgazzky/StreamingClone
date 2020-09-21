import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MoviesActions from '../redux/movies'
import Content from './Content'
import Header from './Header'
import styles from './Movies.module.scss'

const Movies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActions.getMovies())
    }, [])

    return (
        <div className={styles.container}>
            <Header />
            <Content />
        </div>
    )
}

export default Movies
