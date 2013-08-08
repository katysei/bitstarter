var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
    var fs=require('fs');
    var str =fs.readFileSync("index.html", "utf-8");
    
    response.send(str);
});
app.get('/phone.png', function(request, response) {
  
    var fs=require('fs');
    var str =fs.readFileSync("phone.png");   
    response.send(str);
}
);


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
