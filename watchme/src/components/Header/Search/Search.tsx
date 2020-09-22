import React, { useState } from 'react'
import { Input } from 'antd'
import styles from './Input.modules.scss'

interface SearchProps {
    onSearch: (value: string) => void
}
const Search = ({ onSearch }: SearchProps) => {
    const [searchString, setSearchString] = useState('')
    return (
        <div className={styles.searchContainer}>
            <Input.Search
                value={searchString}
                placeholder={'Search'}
                onChange={event => setSearchString(event.target.value)}
                onSearch={onSearch}
            />
        </div>
    )
}
export default Search
