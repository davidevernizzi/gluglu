var Player = function(sprite) {
    Entity.call(this, 2, 5, sprite);
    this.points = 0;
};

Player.prototype = Object.create(Entity.prototype);

Player.prototype.handleInput = function(code) {
    switch(code) {
        case 'up':
            if (this.y>0)
                this.y--;
            break;
        case 'down':
            if (this.y<5)
                this.y++;
            break;
        case 'left':
            if (this.x>0)
                this.x--;
            break;
        case 'right':
            if (this.x<4)
                this.x++;
            break;
    }

    checkGameStatus();
}
Player.prototype.increasePoints = function() {
	this.points++;
	msg = this.points + ' points';
	$('#points').html(msg);
}
