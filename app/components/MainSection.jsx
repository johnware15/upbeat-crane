import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import BookItem from '../components/BookItem';
import styles from '../css/components/main-section';

const cx = classNames.bind(styles);

const MainSection = ({ books }) => {
  // console.log('this is it',books);
  const bookItems = books.map((book, key) => {
    return (
      <BookItem
        index={key}
        id={book.id}
        key={key}
        title={book.title}
        genre={book.genre}
        description={book.description}
        coverjpg={book.coverjpg}
        author={book.author} />);
  });

  return (
    <div className={cx('main-section')}>
      <h3 className={cx('header')}>Vote for your favorite hack day idea</h3>
      <ul className={cx('list')}>{bookItems}</ul>
    </div>
  );
};

MainSection.propTypes = {
  books: PropTypes.array.isRequired
};

export default MainSection;
