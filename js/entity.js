var Entity = function(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
}

Entity.prototype.update = function(dt) {
};

Entity.prototype.collide = function(obj) {
    if (obj.x == this.x && obj.y == this.y) {
        return true;
    }

    return false;
}

Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83 - 20);
};
