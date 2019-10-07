import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = ({ accounts }) => (
  <ul className='listWrapper__wrapper'>
    {accounts.map(account => (
      <ListItem key={account.name} {...account} />
    ))}
  </ul>
);

export default ListWrapper;
