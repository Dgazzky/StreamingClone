import React from 'react'
import styles from './Content.module.scss'
import Grid from './Grid'

const Content = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <Grid />
            </div>
        </div>
    )
}

export default Content
