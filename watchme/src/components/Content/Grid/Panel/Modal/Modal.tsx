import React from 'react'
import { Button, Image, Modal as AntModal } from 'antd'
import styles from './Modal.module.scss'
import { Movie } from '../../../../../@types/movie'
import { useDispatch, useSelector } from 'react-redux'
import MoviesActions, { MoviesSelectors } from '../../../../../redux/movies'
import includes from 'lodash/includes'
interface ModalProps {
    isVisible: boolean
    movie: Movie
    setIsVisible: (value: boolean) => void
}

const Modal = ({ isVisible, movie, setIsVisible }: ModalProps) => {
    const favorites = useSelector(MoviesSelectors.getFavorites)
    const dispatch = useDispatch()

    const handleAddFavorite = () => {
        includes(favorites, movie)
            ? dispatch(MoviesActions.removeMovieFromFavorites(movie))
            : dispatch(MoviesActions.addMovieToFavorites(movie))
    }

    return (
        <AntModal
            visible={isVisible}
            maskClosable={true}
            onCancel={() => setIsVisible(false)}
            centered
            closable={false}
            footer={null}
        >
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        preview={false}
                        loading={'lazy'}
                        src={movie['im:image'][2]['label']}
                    />
                    <Button
                        danger={includes(favorites, movie)}
                        className={styles.addToFavorites}
                        onClick={handleAddFavorite}
                    >
                        {includes(favorites, movie) ? 'Unlike' : 'Like'}
                    </Button>
                </div>
                <div className={styles.info}>
                    <span className={styles.title}>
                        {movie['im:name']['label']}
                    </span>
                    <span className={styles.summary}>
                        {movie.summary.label}
                    </span>
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
                            <span className={styles.infoValue}>
                                {movie.match}%
                            </span>{' '}
                            that you will like this movie
                        </span>
                    </div>

                    <Button
                        className={styles.button}
                        href={movie.link[0].attributes.href}
                        size="small"
                    >
                        View page on Itunes
                    </Button>
                    <div className={styles.infoItem}>
                        <div className={styles.videoContainer}>
                            <video
                                src={movie.link[1].attributes.href}
                                width="350"
                                controls
                            >
                                <source
                                    src="movie.mp4"
                                    type="video/mp4"
                                ></source>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </AntModal>
    )
}
export default Modal
