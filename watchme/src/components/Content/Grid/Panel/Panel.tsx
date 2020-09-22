import React, { useState } from 'react'
import { Card } from 'antd'
import styles from './Panel.module.scss'
import Modal from './Modal'
import { Movie } from '../../../../@types/movie'
interface PanelProps {
    movie: Movie
}
const Panel = ({ movie }: PanelProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [infoVisible, setInfoVisible] = useState(false)

    return (
        <div
            className={styles.panel}
            onClick={() => setIsVisible(!isVisible)}
            onMouseOver={() => setInfoVisible(true)}
            onMouseLeave={() => setInfoVisible(false)}
        >
            <Modal
                isVisible={isVisible}
                movie={movie}
                setIsVisible={setIsVisible}
            />
            <Card hoverable>
                <div className={styles.panelContent}>
                    <img loading={'lazy'} src={movie['im:image'][2]['label']} />
                    {infoVisible && (
                        <div className={styles.info}>
                            <span className={styles.title}>
                                {movie['im:name'].label}
                            </span>
                            <span className={styles.summary}>
                                {movie.summary.label}
                            </span>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    )
}
export default Panel
