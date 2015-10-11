var Star = function(x, y) {
	Entity.call(this, 2, 1, 'images/star.png');
}
Star.prototype = Object.create(Entity.prototype);

Star.prototype.collect = function() {
	console.log('collect');
	player.increasePoints();
	do {
		this.x = Math.floor((Math.random() * board.rows));
		this.y = Math.floor((Math.random() * (board.cols - 1)));
		console.log(this.x + '  -- ' + this.y)
	} while (board.map[this.x][this.y].type == 'water');
}
