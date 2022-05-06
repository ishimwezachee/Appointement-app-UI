import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Item from './item';
import { getItemsFromApi } from '../../redux/itemReducer';
import Nav from '../nav';

const Items = () => {
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    dispatch(getItemsFromApi(id));
  }, []);
  const items = useSelector((state) => state.itemReducer);
  console.log((items[0] || []), 'I am displaying items');

  return (
    <div className="item-page">
      <div className="bar-page">
        <Nav />
      </div>
      <div className="doc">
        <div className="doc-title">
          <h2 className="param"> OUR DOCTORS</h2>
          <p className="text-param">We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
        </div>
        <div className="item-list">
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
      </div>
    </div>
  );
};

export default Items;
