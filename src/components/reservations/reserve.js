/* eslint-disable */
import React from 'react';
// import { useDispatch } from 'react-redux';

const Reserve = (props) => {
  const reserve = props;
  const {
    start_time, end_time, visit_type, name, title, description, image
  } = reserve;
  return (
    <div>    
      <ul className="listItem">
        {/* {' '} */}
      <li>
        Start-time:
        { start_time }
      </li>
      <li>
        End-time:
        { end_time }
      </li>
      
      <li>
        Visit_Type:
        { visit_type }
      </li>
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
            <img src={image} alt={name} />
            {/* { image } */}
          </li>
    </ul>
    <button
      type='button'
      onClick={() => dispatch(removeBookFromApi(book.id))}
    >
     Remove reservation
    </button>
    </div>
  );
};

export default Reserve;
