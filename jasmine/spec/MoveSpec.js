describe("Moves", function() {
  var player = new Player(2,3);
  var enemy = new Bug(3,4);

  beforeEach(function() {
 	var player = new Player(2,3);
 	var enemy = new Bug(3,4);
  });

  it("should not collide", function() {
    expect(player.collide(enemy)).toEqual(false);
  });
});
