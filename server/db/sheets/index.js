const GoogleSheets = require('google-drive-sheets');
const credentials = require('./credentials.json')
const sheetID = '1DLGHWgPD-hfG391DZp6kUV9MuKj-4KF4xrVEKPd4Tbs'

const connect = () => new GoogleSheets(sheetID, credentials)

const session = require('./session')

const controllers = require('./controllers')

const passport = require('./passport')

export default {connect, session,  controllers, passport}
