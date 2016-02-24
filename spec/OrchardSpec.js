describe("The specification for Orchard", function() {

  it("should have a Plant function", function() {
    expect(Plant).toBeDefined();
  });

  it("should have a Tree function", function() {
    expect(Tree).toBeDefined();
  });

  it("should have an increaseHeight function on the prototype of Plant", function() {
    expect(Plant.prototype.increaseHeight).toBeDefined();
  });

  it("should have a decreaseHeight function on the prototype of Plant", function() {
    expect(Plant.prototype.decreaseHeight).toBeDefined();
  });

  it("should have a height property on Plant", function() {
    expect(Plant.prototype.height).toBeDefined();
  });

  it("should have a grow function on the prototype of Tree", function() {
    expect(Tree.prototype.grow).toBeDefined();
  });

  it("should have a trim function on the prototype of Tree", function() {
    expect(Tree.prototype.trim).toBeDefined();
  });

  // When you invoke the trim method on Tree, the height of the Tree 
	// should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))

	// When you invoke the trim method on Tree, the values of the 
	// branches property should be decreased by one.

	// When you invoke the grow method on Tree, the height of the Tree 
	// should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))

  // it("should add two integers", function() {
  //   expect(add(2, 5)).toBe(7);
  // });

});