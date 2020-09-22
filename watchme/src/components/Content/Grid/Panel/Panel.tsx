import React, { useState } from 'react'
import { Card, Button } from 'antd'
import styles from './Panel.module.scss'
import Modal from './Modal'
import { Movie } from '../../../../@types/movie'
import { STRINGS } from '../../../../constants/strings'
interface PanelProps {
    movie: Movie
    key: string
}
const Panel = ({ movie, key }: PanelProps) => {
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
            <Card hoverable key={key}>
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
                                        {STRINGS['release.date']}
                                    </span>
                                    {movie['im:releaseDate'].attributes.label}
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>
                                        {STRINGS['user.ratings']}{' '}
                                        <span className={styles.infoValue}>
                                            {movie.rating}
                                            {''}
                                            /7
                                        </span>
                                    </span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>
                                        {STRINGS['match']}{' '}
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
                                {STRINGS['read.more']}
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
