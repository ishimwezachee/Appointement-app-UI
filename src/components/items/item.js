import React from 'react';
// import { useDispatch } from 'react-redux';

const Item = (props) => {
  const item = props;
  const {
    name, title, description, image,
  } = item;
  console.log(props, 'this the item....');
  //   const dispatch = useDispatch();
  return (
    <ul className="listItem">
      <li>
        Title:
        {' '}
        { title }
      </li>
      <li>
        Name:
        {name}
      </li>
      <li>
        Description:
        { description }
      </li>
      <li>
        Image:
        { image }
      </li>
    </ul>
  );
};

export default Item;
