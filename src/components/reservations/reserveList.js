import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reserve from './reserve';
import { getReserveFromApi } from '../../redux/reserveReducer';
import { getItemsFromApi } from '../../redux/itemReducer';
import Nav from '../nav';

const ReserveList = () => {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserveReducer);
  const items = useSelector((state) => state.itemReducer);
  // console.log(items, 'list of fetched items...');
  // console.log(reserves, 'reservation .....');
  useEffect(() => {
    dispatch(getReserveFromApi());
    dispatch(getItemsFromApi());
  }, []);

  const createArr = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i += 1) {
      for (let j = 0; j < arr2.length; j += 1) {
        if (arr1[i].item_id === arr2[j].id) {
          // eslint-disable-next-line no-param-reassign
          arr1[i].item_id = arr2[j];
        }
      }
    }
    return (arr1);
  };

  return (
    <div className="reserve-page">
      <div className="bare-page">
        <Nav />
      </div>
      <div className="all-reserve">
        {(createArr((reserves[0] || []), (items[0] || [])) || []).map((reserve) => (
          <Reserve
            reserveId={reserve.id}
            itemId={reserve.item_id.id}
            key={reserve.id}
            start_time={reserve.start_time}
            end_time={reserve.end_time}
            visit_type={reserve.visit_type}
            title={reserve.item_id.title}
            name={reserve.item_id.name}
            description={reserve.item_id.description}
            image={reserve.item_id.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ReserveList;
