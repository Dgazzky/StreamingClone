import React, { useState } from 'react'
import { Movie } from '../../../../@types/movie'
import styles from './Featured.module.scss'
import { Button } from 'antd'
import { STRINGS } from '../../../../constants/strings'
import cx from 'classnames'
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
                        {STRINGS['hover.video']}
                    </span>
                )}
            </div>
            <div className={cx(styles.featuredInfo, 'theme')}>
                <span className={cx(styles.featuredTitle, 'title')}>
                    {movie['im:name'].label}
                    <Button
                        className={styles.button}
                        href={movie.link[0].attributes.href}
                        size="small"
                    >
                        {STRINGS['view.page.on.itunes']}
                    </Button>
                </span>
                <span className={styles.featuredSummary}>
                    {movie.summary.label}
                </span>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                        {STRINGS['release.date']}{' '}
                        <span className={cx(styles.infoValue, 'value')}>
                            {movie['im:releaseDate'].attributes.label}
                        </span>
                    </span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                        {STRINGS['user.ratings']}{' '}
                        <span className={cx(styles.infoValue, 'value')}>
                            {movie.rating}
                            /7
                        </span>
                    </span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                        {STRINGS['we.give']}
                        <span className={cx(styles.infoValue, 'value')}>
                            {movie.match}%
                        </span>{' '}
                        {STRINGS['will.like']}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Featured
