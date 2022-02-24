const express = require('express'); 

const  path = require('path')
const app = express();
const port = 3000;

//getting  public path
const publicPath = path.join(__dirname,'../public')
app.use(express.static(publicPath))

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});