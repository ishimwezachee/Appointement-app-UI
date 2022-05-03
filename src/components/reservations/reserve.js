/* eslint-disable */
import React from 'react';
// import { useDispatch } from 'react-redux';

const Reserve = (props) => {
  const reserve = props;
  const {
    start_time, end_time, visit_type
  } = reserve;
  // console.log(props, 'this the time....');
  //   const dispatch = useDispatch();
  return (
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
    </ul>
  );
};

export default Reserve;
