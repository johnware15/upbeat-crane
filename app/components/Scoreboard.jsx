import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/scoreboard';

const cx = classNames.bind(styles);

const Scoreboard = ({books}) => {
  const bookListItems = books.map((book, key) => {
    return (
      <li className={cx('item')} key={key}>
        <span className={cx('book')}>{book.text}</span>
        <span className={cx('count')}>{book.count}</span>
      </li>
    );
  });
  return (
    <div className={cx('scoreboard')}>
      <h3 className={cx('header')}>Vote count</h3>
      <ul className={cx('list')}>
        {bookListItems}
      </ul>
    </div>
  );
};

Scoreboard.propTypes = {
  books: PropTypes.array.isRequired
};

export default Scoreboard;
