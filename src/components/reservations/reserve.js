/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/bookingReducer';
import {getReserveFromApi } from '../../redux/reserveReducer';


const Reserve = (props) => {
  const dispatch = useDispatch();
  const reserve = props;
  const handleDelete =()=>{
   console.log('hello owrld')
  }
  const {
    reserveId,
    itemId,
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
          </li>
    </ul>
    <button
      type='button'
      // onClick={() => dispatch(removeBookFromApi(itemId,reserveId))}
      onClick={handleDelete()}
    >
     Remove reservation
    </button>
    </div>
  );
};

export default Reserve;
