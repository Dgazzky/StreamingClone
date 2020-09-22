import React, { useState } from 'react'
import { Movie } from '../../../../@types/movie'
import styles from './Featured.module.scss'
import { Button } from 'antd'
interface FeaturedProps {
    movie: Movie
}
const Featured = ({ movie }: FeaturedProps) => {
    const [muted, setMuted] = useState(true)
    return (
        <div className={styles.featuredContainer}>
            <div className={styles.videoContainer}>
                <video
                    src={movie.link[1].attributes.href}
                    width="650"
                    height="300"
                    autoPlay
                    muted={muted}
                    onMouseOver={() => setMuted(false)}
                    onMouseLeave={() => setMuted(true)}
                >
                    <source src="movie.mp4" type="video/mp4"></source>
                </video>
                {muted && (
                    <span className={styles.videoText}>
                        Hover over video to play sound
                    </span>
                )}
            </div>
            <div className={styles.featuredInfo}>
                <span className={styles.featuredTitle}>
                    {movie['im:name'].label}
                    <Button
                        className={styles.button}
                        href={movie.link[0].attributes.href}
                        size="small"
                    >
                        View page on Itunes
                    </Button>
                </span>
                <span className={styles.featuredSummary}>
                    {movie.summary.label}
                </span>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                        Release date:{' '}
                        <span className={styles.infoValue}>
                            {movie['im:releaseDate'].attributes.label}
                        </span>
                    </span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                        User rating:{' '}
                        <span className={styles.infoValue}>
                            {movie.rating}
                            /7
                        </span>
                    </span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                        We give{' '}
                        <span className={styles.infoValue}>{movie.match}%</span>{' '}
                        that you will like this movie
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Featured
