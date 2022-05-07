/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/bookingReducer';
import {getReserveFromApi } from '../../redux/reserveReducer';
import Nav from '../nav';


const Reserve = (props) => {
  const dispatch = useDispatch();
  const reserve = props; 
  const {
    reserveId,
    itemId,
    start_time, end_time, visit_type, name, title, description, image
  } = reserve;
  const func1 =()=>{
    dispatch(removeBookFromApi(itemId,reserveId));
  }

  const func2 =()=>{
    window.location.reload(true);
  }
  return (
    <div>
      <div className="reserve-card">
        <div>
          <img id="reserve-pic" src={image} alt={name} />
        </div>
        <ul className="reserve-list">
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
      </ul>
      <div className="remove-btn">
        <button id="r-btn"
          type='button'
          onClick={() => { func1(); func2();}}
        >
        Remove reservation
        </button>
      </div>
      </div>
    </div>
  );
};

export default Reserve;
