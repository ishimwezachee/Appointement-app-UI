import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBookToApi } from '../../redux/bookingReducer';

const BookItem = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  //   const [categoryValue, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitReservesToStore = (e) => {
    e.preventDefault();
    const newBook = {
    //   item_id: uuidv4(),
      start: startDate,
      end: endDate,
      item_id: 1,
      user_id: 1,
    //   category: categoryValue,
    };

    dispatch(addBookToApi(newBook));
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
