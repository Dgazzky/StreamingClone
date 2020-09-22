import React from 'react'
import styles from './Header.module.scss'
import { STRINGS } from '../../constants/strings'
import Search from './Search'
import { useSelector } from 'react-redux'
import { MoviesSelectors } from '../../redux/movies'

interface HeaderProps {
    onSearch: (value: string) => void
    onFavoritesView: () => void
}
const Header = ({ onSearch, onFavoritesView }: HeaderProps) => {
    // const handleChange = () => {
    //     document.body.classList.toggle('dark-theme')
    //     document.body.classList.toggle('light-theme')
    // }

    const isFavoritesMode = useSelector(MoviesSelectors.getMode)
    return (
        <div className={styles.header}>
            <div className={styles.circle}> </div>
            <div className={styles.title}> {STRINGS['label']}</div>
            <div className={styles.divider}> </div>
            <div className={styles.favorites} onClick={onFavoritesView}>
                {isFavoritesMode ? 'View all' : 'View Favorites'}
            </div>

            <div className={styles.search}>
                <Search onSearch={onSearch} />
            </div>
        </div>
    )
}
export default Header
