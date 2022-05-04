import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersFromApi } from '../../redux/userReducer';
import { addBookToApi } from '../../redux/bookingReducer';
// import { getItemFromApi } from '../../redux/singleItemReducer';

const BookItem = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [visitType, setVisitType] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.usersReducer);
  const getUserId = () => (currentUser.user ? currentUser.user.id : console.log('loading...'));
  useEffect(() => {
    dispatch(getUsersFromApi());
  }, []);
  const { id } = useParams();
  const submitReservesToStore = (e) => {
    e.preventDefault();
    const bookedItem = {
      start_time: startDate,
      end_time: endDate,
      visit_type: visitType,
      item_id: Number(id),
      user_id: getUserId(),
    };
    dispatch(addBookToApi(bookedItem, getUserId(), Number(id)));
    setStartDate('');
    setEndDate('');
    setVisitType('');
  };
  const visitTypeHandler = (e) => {
    setVisitType(e.target.value);
  };
  return (
    <div className="form-div">
      <hr />
      <h3 className="new-book">Book Item </h3>
      <form>
        <input className="inp" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Book title" required />
        <input className="inp" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="Book title" required />
        <select className="cate" name="Visits" id="book" onChange={visitTypeHandler} required>
          <option>Select</option>
          <option value="Headache">Headache</option>
          <option value="Check-up">Check-u</option>
          <option value="Teeth">Teeth</option>
          <option value="HIV/AIDS">HIV/AID</option>
          <option value="Therapy">Therapy</option>
          <option value="Not sick">Not sick</option>
        </select>
        <input className="adding" type="button" value="Book Item" onClick={submitReservesToStore} />
      </form>
    </div>
  );
};

export default BookItem;
