import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/book-item';

const cx = classNames.bind(styles);

const BookItem = ({ id, title, description, coverjpg, author, genre }) => {
  return (
    <li className={cx('book-item')} key={id}>
      <span className={cx('book')}>{title}</span>
      <p> {coverjpg} </p>
      <p> {author} </p>
      <p> {description} </p>
      <p> {genre} </p>
    </li>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverjpg: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default BookItem;
