import React from 'react';

const PersonCard = ({ phone, title, link, mail, onClick  }) => {
    return (
        <div className='portfolio__item' onClick={onClick} >
            <h2>{title}</h2>
            <div className='Portfolio__titles'>
                <div className='portfolio__item-cta'>
                    <img src={phone} alt='img' />
                    <h4>{title}</h4>
                </div>
                <div className='portfolio__item-cta'>
                    <img src={mail} alt='img' />
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;