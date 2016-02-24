describe("The specification for Orchard", function() {

  it("should have a Plant function", function() {
    expect(Plant).toBeDefined();
  });

  it("should have a Tree function", function() {
    expect(Tree).toBeDefined();
  });

  // is "prototype" necessary here?
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


  // I don't know if these three tests are correct:
	it("trim should decrease the height of the Tree by the integer passed to it", function() {
		PearTree.height = 5;
		PearTree.trim(2);
		expect(PearTree.height).toBe(3);
	});

	it("trim should decrease the number of branches on Tree by 1", function() {
		PearTree.branches = 4;
		PearTree.trim(2);
		expect(PearTree.branches).toBe(3);
	});

  it("grow should increase the height of the Tree by the integer passed to it", function() {
		PearTree.height = 4;
		PearTree.grow(3);
		expect(PearTree.height).toBe(7);
	});

});


