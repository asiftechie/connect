var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Lets get this started... My first Java script project server side!');
});

app.listen(app.get('port'), function() {
  console.log("Let's get this party started at port:" + app.get('port'));
});
