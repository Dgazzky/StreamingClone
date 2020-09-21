import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MoviesSelectors } from '../../../redux/movies'
import styles from './Grid.module.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { COLORS } from '../../../constants/colors'
import Panel from './Panel'

const Grid = () => {
    const [reducedMovies, setReducedMovies] = useState([])
    const movies = useSelector(MoviesSelectors.getMovies)

    useEffect(() => {
        setReducedMovies(mapMovies(movies))
    }, [movies])

    // const columns = [
    //     {
    //         dataIndex: 'name',
    //         key: 'name',
    //         width: '40%',
    //         render: text => <div className={styles.cell}> {text}</div>,
    //         title: () => (
    //             <div className={styles.headerCell}> {STRINGS['name']}</div>
    //         ),
    //     },
    //     {
    //         dataIndex: 'status',
    //         key: 'status',
    //         width: '60%',
    //         title: () => (
    //             <div className={styles.headerCell}> {STRINGS['status']}</div>
    //         ),
    //         render: (text, record, index) => (
    //             <div className={styles.cell}>
    //                 {icons[text]}
    //                 <span
    //                     className={classnames(
    //                         styles.status
    //                         // styles[text.toLowerCase()]
    //                     )}
    //                 >
    //                     {text}
    //                 </span>
    //             </div>
    //         ),
    //     },
    //     {
    //         title: '',
    //         dataIndex: 'action',
    //         key: 'action',
    //         width: '20px',
    //         render: (text, record) => (
    //             <div className={styles.cell}>
    //                 <ActionPanel onAction={props.onAction} record={record} />
    //             </div>
    //         ),
    //     },
    // ]

    const mapMovies = (data: any) =>
        data.map((el: any) => ({
            key: el.id.attributes['im:id'],
            name: el.title.label,
            ...el,
        }))

    return (
        <div className={styles.tableContainer}>
            {reducedMovies.map(el => (
                <Panel movie={el}></Panel>
            ))}
        </div>
    )
}

export default Grid
