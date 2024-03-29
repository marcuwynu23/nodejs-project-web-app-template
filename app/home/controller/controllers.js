/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
const constants = require('../../../constants/constants')



const template = {
  main: 'index.html'
}

const GET = (req, res) => {
  res.render(template.main, { ctx: constants.ctx })
}

module.exports = {
  GET: GET
}