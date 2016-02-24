// Use Jasmine to write your unit tests before you begin writing any implementation code.

// Unit Tests

// There should be a Plant function defined.
// There should be a Tree function defined.
// There should be a function named increaseHeight on the prototype of Plant.
// There should be a function named decreaseHeight on the prototype of Plant.
// There should be a height property on Plant.
// There should be a function named grow on the prototype of Tree.
// There should be a function named trim on the prototype of Tree.
// When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
// When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))


describe("The specification for Orchard", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

});