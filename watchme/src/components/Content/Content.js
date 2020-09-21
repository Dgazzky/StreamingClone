import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './Content.module.scss'
import Search from './Search'
import Grid from './Grid'
import MoviesActions, { MoviesSelectors } from '../../redux/movies'
import { STRINGS } from '../../constants/strings'
import { useDispatch } from 'react-redux'

const Content = () => {
    const movies = useSelector(MoviesSelectors.getMovies)
    const [searchString, setSearchString] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActions.setSearch(searchString))
    }, [searchString])

    const handleAction = (action, key) => {
        switch (action) {
            case STRINGS['turn.off']:
                dispatch(MoviesActions.turnOffServer(key))
                break
            case STRINGS['turn.on']:
                dispatch(MoviesActions.turnOnServer(key))
                break
            case STRINGS['reboot']:
                dispatch(MoviesActions.rebootServer(key))
                break
        }
    }

    return (
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <Grid onAction={handleAction} />
            </div>
        </div>
    )
}

export default Content
