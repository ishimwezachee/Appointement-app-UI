/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleItems from './singleItem';
import Nav from '../nav';
import { getItemFromApi } from '../../redux/singleItemReducer';

const SingleItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleItem = useSelector((state) => state.singleitemReducer);
  // console.log(singleItem.id, 'single item ID.....');
  useEffect(() => {
    dispatch(getItemFromApi(id));
  }, []);

  return (
    <>
      <div className="item-page">
        <div className="bar-page">
          <Nav />
        </div>
        <SingleItems
          id={singleItem.id}
          key={singleItem.id}
          title={singleItem.title}
          name={singleItem.name}
          description={singleItem.description}
          image={singleItem.image}
        />
        <div className="book-btn">
          <button id="fix-btn" type="button" onClick={() => { window.location.href = `/items/${singleItem.id}/reservation-form`; }}>Fix an appointment</button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
