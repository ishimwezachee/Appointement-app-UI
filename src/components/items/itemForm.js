import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ???
  };
  //   axios.post('http://localhost:3001/reservation', {user}, {withCredentials: true})
  //

  return (
    <form onSubmit={(e) => { handleSubmit(e); }}>
      {/* <label>Book Reservation</label> */}
      <br />
      <input
        name="dt"
        type="date"
      />
      <br />
      {/* <label>Name</label> */}
      <br />
      <input
        name="dt"
        type="date"
      />
      <br />
      {/* <label>Date</label> */}
      <br />
      <input
        className="submitButton"
        type="submit"
        value="Book"
      />
    </form>

  );
};

export default Form;
