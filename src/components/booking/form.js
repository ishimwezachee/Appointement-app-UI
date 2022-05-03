import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersFromApi } from '../../redux/userReducer';
import { addBookToApi } from '../../redux/bookingReducer';
// import { getItemFromApi } from '../../redux/singleItemReducer';

const BookItem = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  //   const [categoryValue, setCategory] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.usersReducer);
  //   const singleItem = useSelector((state) => state.singleitemReducer);
  //   console.log(singleItem, 'single item Item.....');
  const getUserId = () => (currentUser.user ? currentUser.user.id : console.log('loading...'));
  useEffect(() => {
    dispatch(getUsersFromApi());
  }, []);
  const { id } = useParams();
  //   console.log((users || []), 'I am displaying .................');

  const submitReservesToStore = (e) => {
    e.preventDefault();
    const bookedItem = {
      start_time: startDate,
      end_time: endDate,
      visit_type: 'testing...',
      item_id: Number(id),
      user_id: getUserId(),
    //   category: categoryValue,
    };
    dispatch(addBookToApi(bookedItem, getUserId(), Number(id)));
    setStartDate('');
    setEndDate('');
    // setCategory('');
  };
  //   const categoryHandler = (e) => {
  //     setCategory(e.target.value);
  //   };
  return (
    <div className="form-div">
      <hr />
      <h3 className="new-book">Book Item </h3>
      <form>
        <input className="inp" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Book title" required />
        <input className="inp" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="Book title" required />
        {/* <select className="cate" name="books" id="book" onChange={categoryHandler} required>
          <option>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Cooking">Cooking</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="History">History</option>
          <option value="Romance">Romance</option>
        </select> */}
        <input className="adding" type="button" value="Book Item" onClick={submitReservesToStore} />
      </form>
    </div>
  );
};

export default BookItem;
