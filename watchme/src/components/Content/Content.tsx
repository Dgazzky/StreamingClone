import React from 'react'
import styles from './Content.module.scss'
import Grid from './Grid'
import SearchGrid from './Grid/SearchGrid'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, BackTop } from 'antd'

import { useSelector } from 'react-redux'
import { MoviesSelectors } from '../../redux/movies'
import { STRINGS } from '../../constants/strings'
interface ContentProps {
    search: string
    goBack: () => void
}

const Content = ({ search, goBack }: ContentProps) => {
    const foundMovies = useSelector(state =>
        MoviesSelectors.getMoviesBySearch(state, search)
    )

    return (
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                {search ? (
                    <>
                        <Button onClick={goBack} className={styles.goBack}>
                            <ArrowLeftOutlined />
                            {STRINGS['back.to.main']}
                        </Button>
                        <div className={styles.resultHeader}>
                            {STRINGS['results.found']}
                            {foundMovies.length}{' '}
                        </div>

                        <SearchGrid foundMovies={foundMovies} />
                    </>
                ) : (
                    <Grid />
                )}
                <BackTop />
            </div>
        </div>
    )
}

export default Content
