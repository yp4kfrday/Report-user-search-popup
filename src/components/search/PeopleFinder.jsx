import React from 'react'
import '../persons.css'
import SearchIcon from '../../assets/my-search-icon.svg'

const PeopleFinder = () => {
    return (
        <div className='people__finder'>
            <img className='search__icon' src={SearchIcon} alt='img' />
        </div>
    )
}

export default PeopleFinder;