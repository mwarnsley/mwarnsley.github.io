var express = require('express')
    port = 3000;

//Create Application
var app = express();

app.use(express.static('public'));

app.listen(port, function(){
  console.log("Express Server is running on port: " + port);
});
