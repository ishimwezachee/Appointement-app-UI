import React from 'react';
import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

const Item = (props) => {
  const item = props;
  const {
    id, name, title, description, image,
  } = item;
  //   const dispatch = useDispatch();
  console.log(props, 'this the item....');
  console.log(id, 'this is id');
  return (
    <div className="items">
      <ul className="listItem">
        <Link to="/item">
          <li key={id} id={id}>
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
            <img src={image} alt={name} />
            {/* { image } */}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Item;
