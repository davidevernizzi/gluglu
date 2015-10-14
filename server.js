var app=require('express')();
var express=require('express');
var http=require('http').Server(app);
var io=require('socket.io')(http);

var leaderboard = [
    { socketId: 'aaa', playerName: 'Vercingetorige', points: 20 },
    { socketId: 'bbb', playerName: 'Foo', points: 10 },
    { socketId: 'ccc', playerName: 'Bar', points: 2 },
]

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('points', function(newPoints) {
        for(i=0; i<leaderboard; i++) {
            if(leaderboard[i].socketId == newPoints.socketId) {
                leaderboard.splice(i,1);
            }
        }

        leaderboard.push(newPoints);
        console.log(leaderboard);
        leaderboard.sort(function(a, b) {
            return b.points - a.points;
        });
        console.log(leaderboard);
        leaderboard.splice(3, leaderboard.length);
        console.log(leaderboard);

        socket.emit('points', leaderboard);
    });
});

http.listen(3000, function() {
    console.log('Listening on port 3000 ... ');
});
