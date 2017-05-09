/* SERVER */
const path = require('path');
const express = require('express');

const port = (process.env.PORT || 8080)
const app = express();
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'public'));

app.use('/public', publicPath);
app.get('/', function (req, res) { res.sendFile(indexPath) });




/* STARTING */
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
