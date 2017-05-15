const path = require('path');
const express = require('express');




/* EXPRESS SETUP */
const port = process.env.PORT || 8080;
const app = express();
const publicPath = path.join(__dirname, '../public');

//use folder public as static
app.use(express.static(publicPath));

//home router
app.get('/', (req, res) =>
  res.sendFile(path.join(publicPath, 'index.html'))
);

//const for socket.io
const server = app.listen(port, (err) => {
  if(err)
    return console.log(err);

  return console.log(`Listening at http://localhost:${port}`)
});
