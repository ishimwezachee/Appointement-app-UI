import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemFromApi } from '../../redux/singleItemReducer';

const SingleItem = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.singleitemReducer);
  useEffect(() => {
    dispatch(getItemFromApi());
  }, []);
  console.log((item[0]), 'I am displaying single item');
  //  const id = document.getElementById('id');
  //   console.log(id, 'this is id in reducer');

  return (
    <>
      <div>
        <h1>Single Item</h1>
        {' '}
        {/* <p>{[] || item[0].name }</p>
          <p>{item[0].title}</p>
        <p>{item[0].description}</p> */}
        {/* <img src={item[0].image} alt={item[0].name} /> */}
        {(item).map((ele) => <li id={ele.id} key={1}>{`hi ${ele.name}`}</li>)}
        <button type="button" onClick={() => { window.location.href = '/reserve'; }}>Clicked to fixed an appointment</button>
      </div>

    </>
  );
};

export default SingleItem;
