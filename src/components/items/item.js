import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const item = props;
  const {
    id, name, title, description, image,
  } = item;
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <Link className="list" to={`/items/${id}`}>
          <div className="profile-pic">
            <img id="doc-img" src={image} alt={name} />
          </div>
          <ul className="doc-list">
            <li>
              Title:
              {' '}
              { title }
            </li>
            <li>
              Name:
              {name}
            </li>
            <li>
              Description:
              { description }
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Item;
