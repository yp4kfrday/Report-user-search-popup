import React from 'react';
import MyIcon from '../assets/my-icon.svg';
import MailIcon from '../assets/icon-mail.svg'

const PersonCard = ({name, phone, email, onClick  }) => {
    return (
        <div className='portfolio__item' onClick={onClick} >
            <h2>{name}</h2>
            <div className='portfolio-item__titles'>
                <div className='portfolio-item__cta'>
                    <img src={MyIcon} alt='img' />
                    <h4>{phone}</h4>
                </div>
                <div className='portfolio-item__cta'>
                    <img src={MailIcon} alt='img' />
                    <h4>{email}</h4>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;