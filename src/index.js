// Importing modules
const express = require('express');
require('colors');

// Initializing modules
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes'));

// Sending 404 catch error
app.use((req, res, next) => {
  let err = new Error("URL Not found");
  err.status = 404;
  next(err);
})

// Mounting server
app.listen(app.get('port'), () => {
	console.log(
		`Server ready at address http://localhost:${app.get('port')}/`
			.green.bold
	);
})