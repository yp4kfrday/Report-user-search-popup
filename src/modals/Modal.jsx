import React from 'react';
import './modal.css'

import CloseModalIcon from '../assets/my-icon-close-modal.svg'

const Modal = ({ active, setActive, selectedUser }) => {
  if (!selectedUser) return null;

  const handleCloseModal = () => {
    setActive(false);
  }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='popup' onClick={e => e.stopPropagation()}>
        <div className='popup__header'>
          <h2>{selectedUser.name}</h2>
          <button className='popup__close-button' onClick={handleCloseModal}>
            <img src={CloseModalIcon} alt="close-button" />
          </button>
        </div>
          <div className='popup__info'>
            <div className='person-popup__info'>
              <p className='popup__info-title'>Телефон:</p>
              <p className='popup__info-title'>Почта:</p>
              <p className='popup__info-title'>Дата приёма:</p>
              <p className='popup__info-title'>Должность:</p>
              <p className='about__department-title'>Подразделение:</p>
            </div>
            <div className='popup__about'>
              <p className='popup__about-text'>{selectedUser.phone}</p>
              <p className='popup__about-text'>{selectedUser.email}</p>
              <p className='popup__about-text'>{selectedUser.hire_date}</p>
              <p className='popup__about-text'>{selectedUser.position_name}</p>
              <p className='popup__about-department'>{selectedUser.department}</p>
          </div>
        </div>
        <div className='popup__extended'>
          <h3 className='popup__extended-title'> Дополнительная информация: </h3>
          <p className='popup__about-text'>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;