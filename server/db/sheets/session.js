  const sessionstore = require('sessionstore');
const express = require('express');
const xpSession = require('express-session')
const app = express();

const session = () => {
  app.use(xpSession({
    store: sessionstore.createSessionStore()
  })
)};

module.exports = session
