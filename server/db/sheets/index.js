const GoogleSheets = require('google-drive-sheets');
const credentials = require('./credentials.json')
const sheetID = '1DLGHWgPD-hfG391DZp6kUV9MuKj-4KF4xrVEKPd4Tbs'
const books = 2
const members = 1
let token

const setToken = (value)=>{
  token = value
}

const sheet = new GoogleSheets(sheetID, credentials)
sheet.useServiceAccountAuth(credentials, setToken)
console.log(sheet)



sheet.addRow(
  1,
  { id: 0, 	profile_img: 'http://url.com',	first_name: 'john' ,	last_name: 'hopkins',	password: 'youllneverguess',	is_admin: false },
  (error) => console.log('in the error logging',error)
)
