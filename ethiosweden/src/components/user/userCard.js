import React from 'react';

import './card.styles.css';

export const UserCard = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.users.id}?set=set2&size=180x180`}
    />
    <h2> {props.users.name} </h2>
    <p> {props.users.email} </p>
  </div>
);

export default UserCard