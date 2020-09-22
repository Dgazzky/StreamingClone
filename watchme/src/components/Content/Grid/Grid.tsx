import React from 'react'
import styles from './Grid.module.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { COLORS } from '../../../constants/colors'
// import Panel from './Panel'
import { MOVIE_CATEGORIES } from '../../../constants/variables'
import Row from './Row'

const Grid = () => {
    return (
        <div className={styles.tableContainer}>
            {Object.keys(MOVIE_CATEGORIES).map(category => (
                <Row category={MOVIE_CATEGORIES[category]} />
            ))}
        </div>
    )
}

export default Grid
