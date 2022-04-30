import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reserve from './reserve';
import { getReserveFromApi } from '../../redux/reserveReducer';

const ReserveList = () => {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserveReducer);
  // console.log(items[0], 'I am displaying reservations');
  useEffect(() => {
    dispatch(getReserveFromApi());
  }, []);
  return (
    <div>
      {(reserves[0] || []).map((reserve) => (
        <Reserve
          id={reserve.id}
          key={reserve.id}
          sart_time={reserve.start_time}
          end_time={reserve.end_time}
        />
      ))}
    </div>
  );
};

export default ReserveList;
