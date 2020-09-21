import React from 'react'
import styles from './Header.module.scss'
import { STRINGS } from '../../constants/strings'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.circle}> </div>
            <div className={styles.title}> {STRINGS['label']}</div>
            <div className={styles.divider}> </div>
        </div>
    )
}
export default Header
