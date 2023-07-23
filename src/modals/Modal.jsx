import React from 'react';
import './modal.css'

import CloseModalIcon from '../assets/my-icon-close-modal.svg'

const Modal = ({ active, setActive }) => {
  const handleCloseModal = () => {
    setActive(false);
  }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='person-popup' onClick={e => e.stopPropagation()}>
        <div className='popup__title-owner'>
          <h2 >Соня Саченко</h2>
          <button className='close-button' onClick={handleCloseModal}>
            <img className='close-icon' src={CloseModalIcon} alt="close-button" />
          </button>
        </div>
        <div className='person-popup__content'>
          <div className='person-popup__info'>
            <p className='popup__title'>Телефон:</p>
            <p className='popup__title'>Почта:</p>
            <p className='popup__title'>Дата приёма:</p>
            <p className='popup__title'>Должность:</p>
            <p className='popup__title'>Подразделение:</p>
          </div>
          <div className='person-popup__about'>
            <p className='about'>Телефон:</p>
            <p className='about' >Почта:</p>
            <p className='about'> Дата приёма:</p>
            <p className='about'>Должность:</p>
            <p className='about'>Подразделение:</p>
          </div>
        </div>
        <div className='person-popup__extended'>
          <h3 className='popup__extended'> Дополнительная информация: </h3>
          <p className='about'>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;