import React from 'react'
import { Card, Image } from 'antd'
import styles from './Panel.module.scss'

const Panel = (props: any) => {
    console.log(props.movie['im:image'][2])
    return (
        <div className={styles.panel}>
            <Card hoverable style={{ height: '250px' }}>
                {props.movie['im:name']['label']}
                <Image
                    loading={'lazy'}
                    src={props.movie['im:image'][2]['label']}
                />
            </Card>
        </div>
    )
}
export default Panel
