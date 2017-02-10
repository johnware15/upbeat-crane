import Users from '../controllers/Users'

export default (user, done) => {
  done(null, user.id)
};
