import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </ul>
  );
};

export default List;