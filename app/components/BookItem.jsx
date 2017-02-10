import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/book-item';
import urlValidator from 'react-proptypes-url-validator'

const cx = classNames.bind(styles);

const BookItem = ({ description, coverjpg, title, author, id }) => {

  return (
    <li className={cx('book-item')} key={id}>
      <span className={cx('book')}>{text}</span>
      <button
        className={cx('button', 'increment')}
        onClick={onIncrement}>+</button>
      <button
        className={cx('button', 'decrement')}
        onClick={onDecrement}>-</button>
      <button
        className={cx('button', 'destroy')}
        onClick={onDestroy}>{String.fromCharCode(215)}</button>
    </li>
  );
};

BookItem.propTypes = {
  description: PropTypes.array.isRequired,
   coverjpg: urlValidator
    title: PropTypes.string.isRequired,
     author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
};

export default BookItem;
