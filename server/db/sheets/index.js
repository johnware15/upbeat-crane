const GoogleSheets = require('google-drive-sheets');
const credentials = require('./credentials.json')
const sheetID = '1DLGHWgPD-hfG391DZp6kUV9MuKj-4KF4xrVEKPd4Tbs'
const books = 2
const members = 1
let token

const setToken = (error) => {
  spreadsheet.getInfo((error, sheetInfo) => {
    console.log(sheetInfo.title + ' is loaded')

    let sheet1 = sheetInfo.worksheets[0]

    sheet1.getRows(function(err, rows) {
      console.log(rows[24]);
    })
  })
}

const spreadsheet = new GoogleSheets(sheetID, credentials)
spreadsheet.useServiceAccountAuth(credentials, setToken)





spreadsheet.addRow(
  1,
  { id: 0, 	profile_img: 'http://anotherurl.com',	first_name: 'john' ,	last_name: 'hopkins',	password: 'youllneverguess',	is_admin: false },
  (error) => error
)

console.log(token)
