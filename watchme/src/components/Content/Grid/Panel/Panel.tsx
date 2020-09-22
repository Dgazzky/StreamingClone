import React, { useState } from 'react'
import { Card, Button } from 'antd'
import styles from './Panel.module.scss'
import Modal from './Modal'
import { Movie } from '../../../../@types/movie'
interface PanelProps {
    movie: Movie
}
const Panel = ({ movie }: PanelProps) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={styles.panel}>
            {isVisible && (
                <Modal
                    isVisible={true}
                    movie={movie}
                    setIsVisible={setIsVisible}
                />
            )}
            <Card hoverable>
                <div className={styles.panelContent}>
                    <img loading={'lazy'} src={movie['im:image'][2]['label']} />
                    <div className={styles.info}>
                        <div
                            className={styles.title}
                            title={movie['im:name'].label}
                        >
                            {movie['im:name'].label}
                        </div>
                        <div className={styles.summary}>
                            <div className={styles.field}>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>
                                        Release date:
                                    </span>
                                    {movie['im:releaseDate'].attributes.label}
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>
                                        User rating:{' '}
                                        <span className={styles.infoValue}>
                                            {movie.rating}
                                            {''}
                                            /7
                                        </span>
                                    </span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>
                                        Match:{' '}
                                        <span className={styles.infoValue}>
                                            {movie.match}
                                            {''}%
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <Button
                                className={styles.button}
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                Read more
                            </Button>
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </Card>
        </div>
    )
}
export default Panel
