import passport from 'passport'
const GoogleSheets = require('google-drive-sheets');
const credentials = require('../credentials.json')
const sheetID = '1DLGHWgPD-hfG391DZp6kUV9MuKj-4KF4xrVEKPd4Tbs'
const connect = new GoogleSheets(sheetID, credentials)


export function login(req, res, next) {
  // Do email and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.status(401).json({ message: loginErr });
      console.log(user);
      return res.status(200).json({
        message: 'You have been successfully logged in.'
      });
    });
  })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
  // Do email and password validation for the server
  req.logout();
  res.redirect('/');
}

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {

  const user = {
    email: req.body.email,
    password: req.body.password,
    isAdmin: false
  };


  connect.useServiceAccountAuth(credentials, (err) => {
    if(err){console.log(err)}
    connect.getInfo((err, sheetInfo) => {
      if(err){console.log(err)}
      let memberList = sheetInfo.worksheets[0]
      memberList.getRows({start: 0}, (error, rows ) =>{
        console.log('insede of getRows--->');
        let existingUser = rows.filter(row => row.email === req.body.email)
        if(existingUser[0]){
          console.log('user exists', existingUser);
          return res.status(409).json({ message: 'Account with this email address already exists!' });
        }
        return memberList.addRow(user, error => {
          if(error){console.log(error)}
          console.log('user created');
          return res.status(200).json({ message: 'You have been successfully logged in.'})
        })
      })
    })
  })
}

// memberList.addRow(user, (findErr, existingUser) => {
//   if (existingUser) {
//     return res.status(409).json({ message: 'Account with this email address already exists!' });
//   }
//
//   return user.save((saveErr) => {
//     if (saveErr) return next(saveErr);
//     return req.logIn(user, (loginErr) => {
//       if (loginErr) return res.status(401).json({ message: loginErr });
//       return res.status(200).json({
//         message: 'You have been successfully logged in.'
//       });
//     });
//   });
// });

export default {
  login,
  logout,
  signUp
};
