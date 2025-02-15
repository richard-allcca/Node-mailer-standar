const express = require('express')
const { PORT } = require('./config')
const { sendMailGmail, sendMailOutlook } = require('./src/node-mailer/sendMail')

const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
  // sendMailGmail()
  // sendMailOutlook()
  console.log(`Example app listening on port ${PORT}!`)
})
