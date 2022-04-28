import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Item from './item';
import { getItemsFromApi } from '../../redux/itemReducer';

const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemReducer);
  console.log(items);
  useEffect(() => {
    dispatch(getItemsFromApi());
  }, []);
  return (
    <div>
      {/* {items.map((book) => (
        <Item
          id={book.item_id}
          key={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))} */}

      <h1>ItemList</h1>

    </div>
  );
};

export default Items;
