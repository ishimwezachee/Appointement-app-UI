/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleItems from './singleItem';

import { getItemFromApi } from '../../redux/singleItemReducer';

const SingleItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleItem = useSelector((state) => state.singleitemReducer);
  console.log(singleItem.id, 'single item ID.....');
  useEffect(() => {
    dispatch(getItemFromApi(id));
  }, []);
  //   console.log((item[0]), 'I am displaying single item');
  // console.log(SingleItem, 'this is single item...');
  //  const id = document.getElementById('id');
  //   console.log(id, 'this is id in reducer');

  // const itemsList = SingleItem ? SingleItem.map((item) => (
  //   <ul>
  //     <li key={item.id}>{item.name}</li>
  //     <li key={item.title}>{item.title}</li>
  //     <li key={item.description}>{item.description}</li>
  //   </ul>
  // )) : <p>Loading....</p>;

  return (
    <>
      <div>
        <h1>Single Item</h1>
        <SingleItems
          id={singleItem.id}
          key={singleItem.id}
          title={singleItem.title}
          name={singleItem.name}
          description={singleItem.description}
          image={singleItem.image}
        />
        {/* <img src={item[0].image} alt={item[0].name} />
        {/* {(item).map((ele) => <li id={ele.id} key={1}>{`hi ${ele.name}`}</li>)} */}
        <button type="button" onClick={() => { window.location.href = `/items/${singleItem.id}/reservatonForm`; }}>Clicked to fixed an appointment</button>
      </div>

    </>
  );
};

export default SingleItem;
