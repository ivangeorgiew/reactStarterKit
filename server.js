const path = require('path');
const express = require('express');




/* EXPRESS SETUP */
const port = process.env.PORT || 8080;
const app = express();
const publicPath = path.join(__dirname, 'public');

//use folder public as static
app.use(express.static(publicPath));

//router
app.get('/', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'))
});




/* STARTING */
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
