import React from 'react'
import { Card, Image } from 'antd'
import styles from './Panel.scss'

const Panel = props => {
    console.log(props.movie['im:image'][2])
    return (
        <div className={styles.panel}>
            <Card hoverable style={{ height: '250px' }}>
                {props.movie['im:name']['label']}
                <Image src={props.movie['im:image'][2]['label']} />
            </Card>
        </div>
    )
}
export default Panel
