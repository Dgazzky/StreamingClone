import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MoviesActions from '../redux/movies'
import Content from './Content'
import Header from './Header'
import styles from './Movies.module.scss'
import { Spin } from 'antd'

const Movies = () => {
    const dispatch = useDispatch()
    const [isFetching, setIsFetching] = useState(false)

    const [search, setSearch] = useState('')

    useEffect(() => {
        setIsFetching(true)
        dispatch(MoviesActions.getMovies())
        setTimeout(() => setIsFetching(false), 500)
    }, [])

    const handleSearch = (value: string) => {
        setIsFetching(true)
        setSearch(value)
        setTimeout(() => setIsFetching(false), 500)
    }
    const handleFavoritesView = () => {
        setIsFetching(true)
        dispatch(MoviesActions.switchMode())
        setTimeout(() => setIsFetching(false), 500)
    }

    return (
        <div className={styles.container}>
            <Header
                onFavoritesView={handleFavoritesView}
                onSearch={handleSearch}
            /> change to test pull request
            {isFetching ? (
                <Spin />
            ) : (
                <Content goBack={() => handleSearch('')} search={search} />
            )}
        </div>
    )
}

export default Movies
