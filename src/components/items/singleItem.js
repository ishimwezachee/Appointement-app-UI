import React from 'react';
// import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

const SingleItems = (props) => {
  const singleItemList = props;
  const {
    id, name, title, description, image,
  } = singleItemList;
  //   const dispatch = useDispatch();
  // console.log(singleItemList, 'single item list props');
  return (
    <div className="items">
      <ul className="listItem">
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
      </ul>
    </div>
  );
};

export default SingleItems;
