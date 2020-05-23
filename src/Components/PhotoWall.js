import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Photo from './Photo';

function PhotoWall(props) {
  return (
    <div>
      <Link className="add-button-icon" to="/AddPhoto"></Link>

      <div className="photo-grid">
        {props.posts
          .sort((post1, post2) => {
            return post2.id - post1.id;
          })
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PhotoWall;
