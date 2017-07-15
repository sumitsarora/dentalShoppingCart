var express=require('express');
var dbserver=require('./server/dbserver');

var app=express();

app.set('port',(process.env.PORT || 8000));

app.use(express.static(__dirname+'/app'));

//fire controller
dbserver(app);

app.listen(app.get('port'),function(){
  console.log('Node app is running on port', app.get('port'));
});
