const { Router } = require('express');
const router = new Router();
const path = require('path');

require('colors');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/routes/home.html'));
})

router.get('/send_message', (req, res) => {
  console.log(`The message sended from the frontend is ${req.param('message').yellow.bold}`.blue.bold)

  res.redirect('/?success_message=true');
})

router.get('/favicon.ico', (req, res) => {
  res.redirect('/');
})

module.exports = router;