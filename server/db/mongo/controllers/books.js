import _ from 'lodash';
import Book from '../models/books';

/**
 * List
 */
export function all(req, res) {
  Book.find({}).exec((err, books) => {
    if (err) {
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(books);
  });
}

/**
 * Add a Book
 */
export function add(req, res) {
  Book.create(req.body, (err) => {
    if (err) {
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

/**
 * Update a book
 */
export function update(req, res) {
  const query = { id: req.params.id };
  const isIncrement = req.body.isIncrement;
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    Book.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else {
    Book.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  }
}

/**
 * Remove a book
 */
export function remove(req, res) {
  const query = { id: req.params.id };
  Book.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export default {
  all,
  add,
  update,
  remove
};
