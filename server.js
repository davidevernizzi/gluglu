var app=require('express')();
var express=require('express');
var http=require('http').Server(app);
var io=require('socket.io')(http);

var leaderboard = [
'20 -- Vercingetorige',
'10 -- foo',
'2 -- bar',
]

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('points', function(newPoints) {
        console.log('points changed: ' + newPoints);
        leaderboard.push(newPoints);
        console.log(leaderboard);
        leaderboard.sort();
        console.log(leaderboard);
        leaderboard.splice(3, leaderboard.length);
        console.log(leaderboard);
        //TODO: better update leaderboard

        socket.emit('points', leaderboard);
    });
});

http.listen(3000, function() {
    console.log('Listening on port 3000 ... ');
});
