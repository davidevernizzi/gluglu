function checkGameStatus() {
    allEnemies.forEach(function(enemy) {
        if (enemy.collide(player)) {
            console.log('COLLISION!!!');
            gameOver('You have been eated by bugs');
        }
    });

    allWaters.forEach(function(water) {
        if (water.collide(player)) {
	    console.log('IN WATER!!!');
	    gameOver('You fell into water');
        }
    });

    if (star.collide(player)) {
        console.log('ON STAR!!!');
	star.collect();
    }
}

function gameOver(msg) {
    player.x=2;
    player.y=5;
    player.points=0;

    timeToWait = 0.75;
    level = 1;
    $('#level').html('level ' + level);

    $('#points').html('0 points');
    allEnemies = createEnemies();
    clearTimeout(timeout);
    gameStarted = false;
    $('#msg').html(msg);
    $('#gameOver').show();
}

var createEnemies = function() {
     return [
        new Bug(-1, 0),
        new Bug(-4, 1),
        new Bug(-3, 2),
        new Bug(-5, 3),
        new Bug(-1, 4)
    ];
}

