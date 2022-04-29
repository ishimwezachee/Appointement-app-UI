import React from 'react';
// import { useDispatch } from 'react-redux';

/* eslint-disable */
const Reserve = (props) => {
  const reserve = props;
  const {
    start_time, end_time,
  } = reserve;
  console.log(props, 'this the item....');
  //   const dispatch = useDispatch();
  return (
    <ul className="listItem">
      <li>
        Start-time:
        {' '}
        { start_time }
      </li>
      <li>
        End-time:
        { end_time }
      </li>
    </ul>
  );
};

export default Reserve;
