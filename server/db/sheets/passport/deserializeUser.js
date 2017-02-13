import GoogleSheets from 'google-drive-sheets'
import credentials from '../credentials.json'
import Users from '../controllers/Users'
const sheetID = '1DLGHWgPD-hfG391DZp6kUV9MuKj-4KF4xrVEKPd4Tbs'
const sheetIndex = 1
const connect = new GoogleSheets(sheetID, credentials)

// Users.findById(id, (err, user) => {
//   done(err, user);
// });

export default (id, done) => {
  connect.useServiceAccountAuth(credentials, (err) => {
    if(err){console.log(err)}
    connect.getInfo((err, sheetInfo) => {
      if(err){console.log(err)}
      let memberList = sheetInfo.worksheets[0]
      memberList.getRows({start: 0}, (error, rows ) =>{
        let existingUser = rows.filter(row => row.id === id)
        if(existingUser[0]){
          done(error, existingUser)
        }
      })
    })
  })
}
