import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import BookItem from '../components/BookItem';
import styles from '../css/components/main-section';

const cx = classNames.bind(styles);

const MainSection = ({ book }) => {
  // console.log('this is it',books);
  const bookItems = books.map((book, key) => {
    return (
      <BookItem
        index={key}
        id={book.id}
        key={key}
        description={book.description}
        coverjpg={book.coverjpg}
        title={book.title}
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
  description: PropTypes.array.isRequired,
   coverjpg: urlValidator
    title: PropTypes.string.isRequired,
     author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
};

export default MainSection;
