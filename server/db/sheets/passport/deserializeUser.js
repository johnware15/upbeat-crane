import Users from '../controllers/Users'

export default (id, done) => {
  Users.findById(id, (err, user) => {
    done(err, user);
  });
};
