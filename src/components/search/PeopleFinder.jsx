import React, { useState, useEffect } from 'react';
import './peopleFinder.css'
import SearchIcon from '../../assets/search-icon.svg'

const PeopleFinder = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Создаем таймер для выполнения поиска через 3 секунды после каждого изменения текста в инпуте
        const timerId = setTimeout(() => {
            onSearch(searchQuery.toLowerCase());
        }, 1000);

        // Очищаем таймер при каждом новом изменении текста в инпуте
        return () => {
            clearTimeout(timerId);
        };
    }, [searchQuery, onSearch]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='people-finder-container'>
            <input
                className='people-finder-container__finder'
                type='text'
                value={searchQuery}
                onChange={handleInputChange} // Используем handleSearch для обработки изменений в инпуте
            />
            <img src={SearchIcon} alt='img' className='people-finder-container__icon' />
        </div>
    )
}

export default PeopleFinder;