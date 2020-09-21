import React from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styles from './Search.module.scss'
import { COLORS } from '../../../constants/colors'
import PropTypes from 'prop-types'

const Search = (props: any) => {
    const { placeholder, value, onChange } = props
    return (
        <div className={styles.search}>
            <Input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                prefix={<SearchOutlined style={{ color: COLORS['gray'] }} />}
            />
        </div>
    )
}
Search.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    searchString: PropTypes.string.isRequired,
}

export default Search
