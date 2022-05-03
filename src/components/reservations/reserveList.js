import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reserve from './reserve';
import { getReserveFromApi } from '../../redux/reserveReducer';
import { getItemsFromApi } from '../../redux/itemReducer';

const ReserveList = () => {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserveReducer);
  const itemData = useSelector((state) => state.itemReducer);
  console.log(itemData, 'list of fetched items...');
  console.log(reserves, 'reservation .....');
  useEffect(() => {
    dispatch(getReserveFromApi());
    dispatch(getItemsFromApi());
  }, []);
  return (
    <div>
      {(reserves[0] || []).map((reserve) => (
        <Reserve
          id={reserve.id}
          key={reserve.id}
          start_time={reserve.start_time}
          end_time={reserve.end_time}
          visit_type={reserve.visit_type}
        />
      ))}
    </div>
  );
};

export default ReserveList;
