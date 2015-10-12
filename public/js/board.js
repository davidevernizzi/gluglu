var Cell = function(x, y, type) {
    this.type = type;
    switch(type) {
        case 'water':
            Entity.call(this, x, y, 'images/water-block.png');
            break;
        case 'stone':
            Entity.call(this, x, y, 'images/stone-block.png');
            break;
        case 'grass':
            Entity.call(this, x, y, 'images/grass-block.png');
            break;
        default:
            Entity.call(this, x, y, 'images/stone-block.png');
    }
};
Cell.prototype = Object.create(Entity.prototype);

var Board = function(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.map = [];
    for (i = 0; i < this.rows; i++) {
        this.map[i] = [];
        for (j = 0; j < this.cols; j++) {
            this.map[i][j] = new Cell(i, j, 'stone');
        }
    }

    j--;
    for (i = 0; i < this.rows; i++) {
	    this.map[i][j] = new Cell(i, j, 'grass');
    }

    allWaters = [
    	new Cell(3, 2, 'water'),
    	new Cell(4, 3, 'water')
    ];

    map = this.map;
    allWaters.forEach(function(water) {
		    map[water.x][water.y] = water;
    })


    this.render = function() {
        for (i = 0; i<this.rows; i++) {
            for (j = 0; j<this.cols; j++) {
                ctx.drawImage(Resources.get(this.map[i][j].sprite), this.map[i][j].x * 101, this.map[i][j].y * 83);
            }
        }
    }
}


