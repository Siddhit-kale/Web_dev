import React from 'react';

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id="title">{props.title}</p>
      <img src='https://via.placeholder.com/150' alt='love' id='user-img' />
      <p id='user-desc'>{props.describe('', () => {
        
      })
      }</p>
    </div>
  );
};

export default UserCard;
