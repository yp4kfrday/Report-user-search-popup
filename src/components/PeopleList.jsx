import React from 'react'
import './persons.css'
import MyIcon from '../assets/my-icon.svg';
import MailIcon from '../assets/icon-mail.svg'

import PersonCard from './PersonCard'
import PeopleFinder from './search/PeopleFinder';
import Modal from '../modals/Modal';

import { useState } from 'react';

const PeopleList = () => {
  const portfolioData = [
    { phone: MyIcon, mail: MailIcon, title: 'Имя Фамилия', link: 'https://github.com/yp4kfrday/react-essons' },
    { phone: MyIcon, mail: MailIcon, title: 'Имя Фамилия', link: 'https://github.com/yp4kfrday/react-essons' },
    { phone: MyIcon, mail: MailIcon, title: 'Имя Фамилия', link: 'https://github.com/yp4kfrday/react-essons' },
    { phone: MyIcon, mail: MailIcon, title: 'Имя Фамилия', link: 'https://github.com/yp4kfrday/react-essons' },
    { phone: MyIcon, mail: MailIcon, title: 'Имя Фамилия', link: 'https://github.com/yp4kfrday/react-essons' },
    { phone: MyIcon, mail: MailIcon, title: 'Имя Фамилия', link: 'https://github.com/yp4kfrday/react-essons' },
  ];

  const [modalActive, setModalActive] = useState(true);

  return (
    <div className='portfolio'>
      <PeopleFinder />
      <div className='container portfolio__container'>
        {portfolioData.map((item, index) => (
          <PersonCard
            onClick={() => setModalActive(true)}
            key={index}
            phone={item.phone}
            mail={item.mail}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  )
}

export default PeopleList;
