import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from '../components/EntryBox';
import MainSection from '../components/MainSection';
import Scoreboard from '../components/Scoreboard';
import { createBook, typing, incrementCount,
  decrementCount, destroyBook } from '../actions/books';
import styles from '../css/components/vote';

const cx = classNames.bind(styles);

class Vote extends Component {
  render() {
    const { books, typing, createTopic, destroyBook, incrementCount, decrementCount } = this.props;

    return (
      <div className={cx('vote')}>
        <EntryBox
          topic={books}
          onEntryChange={typing}
          onEntrySave={createBook} />
        <MainSection
          books={books}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyBook} />
        <Scoreboard books={books} />
      </div>
    );
  }
}

Vote.propTypes = {
  books: PropTypes.array.isRequired,
  typing: PropTypes.func.isRequired,
  createBook: PropTypes.func.isRequired,
  destroyBook: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.book.books,
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { createBook, typing, incrementCount, decrementCount, destroyBook })(Vote);
