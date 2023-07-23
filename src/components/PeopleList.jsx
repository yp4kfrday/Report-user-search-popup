import React from 'react'
import './persons.css'
import PersonCard from './PersonCard'
import PeopleFinder from './search/PeopleFinder';
import Modal from '../modals/Modal';

import { useState, useEffect } from 'react';

const PeopleList = () => {
  const [modalActive, setModalActive] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [filteredUsers, setFilteredUsers] = useState([]); // Список пользователей после фильтрации

  useEffect(() => {
    // Функция для выполнения GET-запроса к серверу
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/');
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
      }
    };

    fetchUsers();
  }, []); // Второй аргумент [] указывает, что useEffect выполнится только при загрузке компонента

  // Функция для фильтрации пользователей по поисковому запросу
  const handleSearch = (searchQuery) => {
    const filteredData = users.filter((user) => {
      const nameMatch = user.name && user.name.toLowerCase().includes(searchQuery);
      const titleMatch = user.title && user.title.toLowerCase().includes(searchQuery);
      return nameMatch || titleMatch;
    });
    setFilteredUsers(filteredData);
  };


  return (
    <div className='portfolio'>
      <PeopleFinder onSearch={handleSearch} />
      <div className='portfolio__container container'>
        {filteredUsers.map((user, index) => (
          <PersonCard
            onClick={() => {
              setModalActive(true);
              setSelectedUser(user);
            }}
            key={index}
            name={user.name}
            phone={user.phone}
            email={user.email}
            title={user.name}
            link={user.address}
          />
        ))}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        selectedUser={selectedUser}
      />
    </div>
  )
}

export default PeopleList;
