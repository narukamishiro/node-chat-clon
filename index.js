var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var nick="";

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  nick=prompt("elige nick");
  console.log(nick +' connected');
  socket.on('chat message', function(msg){
   io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log(nick+' disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});