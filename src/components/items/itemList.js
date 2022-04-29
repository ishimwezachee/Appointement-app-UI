import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './item';
import { getItemsFromApi } from '../../redux/itemReducer';

const Items = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsFromApi());
  }, []);
  const items = useSelector((state) => state.itemReducer);
  console.log(items[0], 'I am displaying items');

  return (
    <div>
      {(items[0] || []).map((item) => (
        <Item
          id={item.id}
          key={item.id}
          title={item.title}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Items;
