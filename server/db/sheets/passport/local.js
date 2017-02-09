const GoogleSheets = require('google-drive-sheets');
const credentials = require('../credentials.json')
const sheetID = '1DLGHWgPD-hfG391DZp6kUV9MuKj-4KF4xrVEKPd4Tbs'
const connect = new GoogleSheets(sheetID, credentials)

export default function authenticate (email, password, done){

  connect.useServiceAccountAuth(credentials, (err) => {
    connect.getInfo((err, sheetInfo) => {
      let memberList = sheetInfo.worksheets[0]
      memberList.getRows({start: 1, max: 10}, (error, rows) => {
        let user = rows.filter(row => row.email === email)[0]
        console.log(user)
        console.log(password)
        if (!user) return done(null, false, { message: `There is no record of the email ${email}.` });
        if( user.password === password){
          console.log('got here');
          return done(null, user)
        } else done(null, false, { message: 'Your email/password combination is incorrect.' });
      });
    })
  })
}









// authenticateLocally('johnthopkins@gmail.com', 'youllneverguess', () => console.log('complete'))
