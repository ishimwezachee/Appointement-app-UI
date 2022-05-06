import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersFromApi } from '../../redux/userReducer';
import { addBookToApi } from '../../redux/bookingReducer';
// import { getItemFromApi } from '../../redux/singleItemReducer';
import Nav from '../nav';

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
    <div className="item-page">
      <div className="bar-page">
        <Nav />
      </div>
      <div className="book-form">
        <h3 className="new-book">Book an appointment with a docotor </h3>
        <form>
          <input className="form-control" id="i" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Book title" required />
          <input className="form-control" id="i" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="Book title" required />
          <select className="form-control" name="Visits" id="book" onChange={visitTypeHandler} required>
            <option>Select</option>
            <option value="Headache">Headache</option>
            <option value="Check-up">Check-u</option>
            <option value="Teeth">Teeth</option>
            <option value="HIV/AIDS">HIV/AID</option>
            <option value="Therapy">Therapy</option>
            <option value="Not sick">Not sick</option>
          </select>
          <div className="btn-app">
            <input className="add-btn" type="button" value="Book a Doctor" onClick={submitReservesToStore} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookItem;
