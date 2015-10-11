var Bug = function(x, y) {
    Entity.call(this, x, y, 'images/enemy-bug.png');
};
Bug.prototype = Object.create(Entity.prototype);

Bug.prototype.update = function(dt) {
    this.x++;
    this.limit = 5;

    if (this.x<-this.limit) {
        this.x = board.cols;
    }

    if (this.x>=board.cols) {
        this.x = -1;
    }
}
