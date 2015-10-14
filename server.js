var app=require('express')();
var express=require('express');
var http=require('http').Server(app);
var io=require('socket.io')(http);

var leaderboard = [
    { socketId: 'aaa', playerName: 'Vercingetorige', points: 3 },
    { socketId: 'ccc', playerName: 'Bar', points: 2 },
]

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('points', function(newPoints) {
        console.log(leaderboard);
        for(i=0; i<leaderboard.length; i++) {
            if(leaderboard[i].socketId == newPoints.socketId) {
                leaderboard.splice(i,1);
            }
        }

        leaderboard.push(newPoints);
        leaderboard.sort(function(a, b) {
            return b.points - a.points;
        });
        leaderboard.splice(3, leaderboard.length);
        console.log(leaderboard);
        console.log('----------');

        socket.emit('points', leaderboard);
    });
});

http.listen(3000, function() {
    console.log('Listening on port 3000 ... ');
});
