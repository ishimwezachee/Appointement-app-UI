import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => { handleSubmit(e); }}>
      <br />
      <input
        name="dt"
        type="date"
      />
      <br />
      <br />
      <input
        name="dt"
        type="date"
      />
      <br />
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
