import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/book-item';

const cx = classNames.bind(styles);

const BookItem = ({ id, title, description, coverjpg, author, genre }) => {
  return (
    <li className={cx('book-item')} key={id}>
      <span className={cx('book')}>
        {title}
        <div className={cx('bookInfo')}>{coverjpg}</div>
        <div className={cx('bookInfo')}>{author}</div>
      </span>
    </li>
  );
};

// <p className={cx('bookInfo')}> {coverjpg} </p>
// <p className={cx('bookInfo')}> {author} </p>
// <p className={cx('bookInfo')}> {description} </p>
// <p className={cx('bookInfo')}> {genre} </p>

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverjpg: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default BookItem;
